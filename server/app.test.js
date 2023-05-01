const request = require("supertest");
const test = require("./server");

it('List of Request Forms', async () => {
	request(test)
	.get("/form_api/view")
	.expect(200)
	.expect('Content-Type', 'application/json')
	.end((err, res) => {
		if (err) throw err;
})})

it('Transaction Request Made', async () => {
	request(test)
	.get("/form_api/transaction_made")
	.expect(200)
	.expect('Content-Type', 'application/json')
	.end((err, res) => {
		if (err) throw err;
})})

it('Request Form Input Default Values', async () => {
	request(test)
	.get("/form_api/request/get/4")
	.expect(200)
	.expect('Content-Type', 'application/json')
	.end((err, res) => {
		if (err) throw err;
})})

it('Ongoing Student Transactions for Student Transaction Table', async () => {
	request(test)
	.get("/student_api/transactions/4")
	.expect(200)
	.expect('Content-Type', 'application/json')
	.end((err, res) => {
		if (err) throw err;
})})

it('Transaction Info based on Transaction ID', async () => {
	request(test)
	.get("/student_api/transaction_details/1")
	.expect(200)
	.expect('Content-Type', 'application/json')
	.end((err, res) => {
		if (err) throw err;
})})



