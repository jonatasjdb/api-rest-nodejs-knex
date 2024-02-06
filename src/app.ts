import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

export const app = fastify()

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app.get('/Luiza', async (request, reply) => {
  return reply.send(
    'I love u one million times!\nThe day is comming!\n14/09/2024\n\nOBS: Ainda não fiz o curso de layout kkk',
  )
})
