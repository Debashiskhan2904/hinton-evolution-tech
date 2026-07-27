import Pricing from '../components/Pricing';
import SEO from '../components/SEO';

export default function PricingPage() {
  return (
    <>
      <SEO 
        title="Pricing Plans - Hinton Evolution Tech" 
        description="Transparent and value-driven pricing packages for premium web design and development services. Find the perfect plan for your business."
        url="https://www.hintonevolution.com/pricing"
      />
      <Pricing isPage={true} />
    </>
  );
}
