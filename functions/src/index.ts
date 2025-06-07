/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {initializeApp} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";

// Initialize Firebase Admin
initializeApp();
const db = getFirestore();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// Contact Form Submission Handler
export const submitContactForm = onRequest({
  cors: true,
  maxInstances: 10
}, async (req, res) => {
  // Only allow POST
  if (req.method !== "POST") {
    logger.info("Rejected non-POST request");
    res.status(405).json({
      success: false,
      message: "Method Not Allowed"
    });
    return;
  }

  try {
    logger.info("Received form submission", req.body);
    logger.info("Request headers:", req.headers);
    
    const formData = req.body;
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      logger.error("Validation failed: Missing required fields", formData);
      res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
      return;
    }
    
    // Add timestamp
    const data = {
      ...formData,
      timestamp: new Date().toISOString()
    };
    
    try {
      // Write to Firestore
      logger.info("Attempting to write to Firestore collection 'contact-forms'");
      const docRef = await db.collection("contact-forms").add(data);
      logger.info("Contact form submitted successfully to Firestore", {
        email: formData.email,
        documentId: docRef.id,
        collection: "contact-forms"
      });
    } catch (firestoreError) {
      // If Firestore fails, log the error but don't fail the request
      logger.error("Error writing to Firestore:", firestoreError);
      logger.info("Continuing without Firestore storage");
    }
    
    // Log success
    logger.info("Contact form processed", {email: formData.email});
    
    res.status(200).json({
      success: true,
      message: "Form submitted successfully"
    });
  } catch (error) {
    logger.error("Error submitting contact form:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
});
