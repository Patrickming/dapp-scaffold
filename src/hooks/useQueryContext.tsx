import { useRouter } from 'next/router'


export default function useQueryContext() {
  const router = useRouter()
  const { cluster } = router.query
  type EndpointTypes = 'mainnet' | 'devnet' | 'localnet'
  const endpoint = cluster ? (cluster as EndpointTypes) : 'mainnet'
  const hasClusterOption = endpoint !== 'mainnet'
  const fmtUrlWithCluster = (url) => {
    if (hasClusterOption) {
      const mark = url.includes('?') ? '&' : '?'
      return decodeURIComponent(`${url}${mark}cluster=${endpoint}`)
    }
    return url
  }

  return {
    fmtUrlWithCluster,
  }
}
