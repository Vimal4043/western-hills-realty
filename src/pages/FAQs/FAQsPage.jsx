import FAQHero from './FAQHero.jsx'
import FAQProjectInfo from './FAQProjectInfo.jsx'
import FAQPricing from './FAQPricing.jsx'
import FAQBuyingProcess from './FAQBuyingProcess.jsx'
import FAQAmenities from './FAQAmenities.jsx'
import FAQCTA from './FAQCTA.jsx'
import FAQFinance from './FAQFinance.jsx'

export default function FAQsPage() {
  return (
    <>
      <main className="pt-19 md:pt-28">
        <FAQHero />
        <FAQProjectInfo />
        <FAQPricing />
        <FAQBuyingProcess />
        <FAQAmenities />
        <FAQFinance />
        <FAQCTA />
      </main>
    </>
  )
}
