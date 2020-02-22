API_URL = 'https://opentdb.com/api.php?amount=10';
const axios = require('axios');

axios.get(API_URL)
	.then(res => {
		console.log('クイズデータ : ', res.data.results);
	})
	.catch(error => {
		console.log('エラー', error);
	});

// async/awaitのパターン
// async function fetchQuizData() {
// 	try {
// 		const res = await axios.get(API_URL);
// 		console.log('クイズデータ : ', res.data.results);
// 	} catch (error) {
// 		console.log('エラー', error);
// 	}
// };
// fetchQuizData();
