const wait = new Promise((res) => setTimeout(res, 2000))
export default async function analytics(payload: string) {
  const g = await getGa()
  if (g) {
    console.log('ga ', payload)
    // @ts-ignore
    g?.set('page', payload)
    g?.send('pageview')
  }
}

let count = 0
let _g: any;
async function getGa(): Promise<any> {
  if (_g) return _g
  if (count++ > 10) return null

  await new Promise((res) => setTimeout(res, 2000))
  try {
    // @ts-ignore
    const __g = window.ga.getAll()[0]
    if (__g) {
      _g = __g
      return _g
    }
  } catch {}

  return getGa()
}
