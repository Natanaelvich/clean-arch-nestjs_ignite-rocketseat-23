import http from 'k6/http'
import { sleep } from 'k6'

export const options = {
  vus: 10,
  duration: '10s',
}
export default function () {
  http.post('http://localhost:9999/sessions', {
    email: 'natanael@test.com',
    password: '123456',
  })
  sleep(1)
}
