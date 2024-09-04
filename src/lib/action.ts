// 'use server'

export async function getProjects() {
  const res = await fetch('/data/portfolio.json')
  const data = await res.json()
  return data
}