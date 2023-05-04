// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../server');
// const { expect } = chai;

// chai.use(chaiHttp);

// describe('Clerk API', () => {
//   describe('GET /transactions', () => {
//     it('should get all transactions with a given status', (done) => {
//       const status = 'completed'; // Replace this with a valid status from your database
//       chai.request(app)
//         .get(`/clerk/transactions`)
//         .query({ transaction_status: status })
//         .end((err, res) => {
//           expect(err).to.be.null;
//           expect(res).to.have.status(200);
//           expect(res.body).to.be.an('array');
//           res.body.forEach(transaction => {
//             expect(transaction).to.have.property('transaction_status').that.equals(status);
//           });
//           done();
//         });
//     });
//   });
// });
