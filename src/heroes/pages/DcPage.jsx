import { HeroList } from "../components"

export const DcPage = () => {
  return (
    <div>
      <span className="text-blue-500">Characters</span>
      <h1 className="text-4xl font-bold mb-3 text-blue-700">DC Comics</h1>

      <HeroList
        publisher={'DC Comics'}
      />

    </div>
  )
}
