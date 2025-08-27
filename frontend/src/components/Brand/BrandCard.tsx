interface BrandCardProps {
  src: string
  brandName: string
}

const BrandCard = ({ src, brandName }: BrandCardProps) => {
  return (
    <div className="w-[200px] h-[200px] flex justify-center items-center">
      <img src={src} alt={brandName} width={170} height={170} loading="lazy" />
    </div>
  )
}

export default BrandCard
