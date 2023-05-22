const { expect } = require('chai');
const request = require('supertest');
const express = require('express');
const router = require('../routes/admin'); // Replace with the actual path to the router file

const app = express();
app.use(express.json());
app.use('/', router);

describe('API routes', () => {
  describe('PUT /transaction_status/:id', () => {
    it('should update transaction status and return the result', async () => {
      // Provide a valid transaction ID and status for testing
      const transactionId = 'some_transaction_id'; // Replace with a valid transaction ID
      const transactionStatus = 'some_status'; // Replace with a valid status

      // Make a request to the /transaction_status/:id endpoint
      const res = await request(app)
        .put(`/transaction_status/${transactionId}`)
        .send({ transaction_status: transactionStatus });

      // Check for a successful response
      expect(res.status).to.equal(200);
      // Add additional checks for the response data structure and content as needed
    });
  });
});
