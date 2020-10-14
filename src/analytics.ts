const wait = new Promise((res) => setTimeout(res, 2000))
export default async function analytics(payload: string) {
  await wait
  // @ts-ignore
  if (window?.ga) {
    console.log('ga ', payload)
    // @ts-ignore
    const g = window?.ga?.getAll()[0]
    g?.set('page', payload)
    g?.send('pageview')
  }
}
