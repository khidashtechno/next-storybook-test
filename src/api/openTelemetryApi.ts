import { trace } from '@opentelemetry/api'
export const dynamic = 'force-dynamic'

export async function fetchData() {

    let res: any
    await trace
        .getTracer('nextjs-server')
        .startActiveSpan('fetchJsonPlaceholder', async (span) => {
            try {
                res = await fetch("https://jsonplaceholder.typicode.com/posts");
            } finally {
                span.addEvent('fetchJsonPlaceholder was called', {
                    provider: 'jsonplaceholder',
                    someKey: 'someValue',
                })
                span.end()
            }
        })


    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}