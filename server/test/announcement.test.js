// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../routes/announcement');
// const { expect } = chai;

// chai.use(chaiHttp);

// describe('Announcement API', () => {
//   describe('POST /post', () => {
//     it('should create a new announcement', (done) => {
//       chai.request(app)
//         .post('/post')
//         .send({ announcement_title: 'Test Title', announcement_body: 'Test Body' })
//         .end((err, res) => {
//           expect(err).to.be.null;
//           expect(res).to.have.status(200);
//           expect(res.body).to.eql('Test Body');
//           done();
//         });
//     });
//   });

//   describe('GET /details/:id', () => {
//     it('should get announcement details by ID', (done) => {
//       const testId = 1; // Replace this with a valid announcement ID from your database
//       chai.request(app)
//         .get(`/details/${testId}`)
//         .end((err, res) => {
//           expect(err).to.be.null;
//           expect(res).to.have.status(200);
//           expect(res.body).to.have.keys('announcement_title', 'announcement_date', 'announcement_time', 'announcement_body');
//           done();
//         });
//     });
//   });
// });
