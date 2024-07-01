// [express] 서버 관리 모듈
// express 모듈 호출
const express = require('express')
const app = express()
const PORT = 3001

const mysql = require('mysql')
const cors = require('cors')

// http://localhost:3001/ 접속 시 응답 메시지 
// : client의 web browser에 response
app.get('/', (req, res) => {
  res.send('서버 응답!! 성공!!')
})

// : console(터미널)에 출력
app.listen(PORT, () => {
  console.log(`서버 실행 중 : http://localhost:${PORT}/`)
})

// MySQL 연결
const db = mysql.createConnection({
  host: '127.0.0.1',  // 호스트
  user: 'root',       // DB 계정
  password: '1111',   // DB PW
  // database: 'movie',  // 연결할 DB
  database: 'employees',  // 연결할 DB
});

db.connect()

// console.log('db >> ', db)

app.use(cors({
  origin: '*',        // 출처 허용 옵션
  credentials: true,  // 응답 헤더에 Access-Control-Allow-Credentials 추가
  optionsSuccessStatus: 200, // 응답 상태 200으로 설정
}));

// post 요청 시 값을 객체로 변환
app.use(express.urlencoded({ extended: true }))

app.get('/api', (req, res) => {
  res.send('/api 요청에 대한 응답!!!')
});

app.get('/api/get', (req, res) => {
  // res.header에 접근 권한을 모두 허용 -> cors 에러 방지
  // res.header('Access-Control-Allow-Origin', '*');

  // 실행할 쿼리문
  //const sqlQuery = 'SELECT * FROM t1'
  // console.log('res >>', res)
  const sqlQuery = "SELECT * FROM employees.departments;"

  db.query(sqlQuery, (err, data) => {
    if (err) {
      console.log('[err] 에러 발생')
      res.send('ERROR')
    } else {
      console.log('success')
      res.send(data)
    }
  })
});