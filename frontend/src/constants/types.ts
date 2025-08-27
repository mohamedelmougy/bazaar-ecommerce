type Slide = {
  imgUrl: string
  alt: string
  background: string
  headings?: string
  paragraph?: string
}

type Category = {
  title: string
  imgUrl: string
  background: string
}

interface Brand {
  name: string
  imgUrl: string
}

interface Media {
  name: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export type { Slide, Category, Brand, Media }
