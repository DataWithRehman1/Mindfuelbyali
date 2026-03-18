const pricing = [
  {
    plan: 'Starter',
    price: '$500',
    priceNote: 'starting from',
    description: 'Perfect for small businesses needing their first data or ML solution.',
    features: [
      'Exploratory Data Analysis (EDA)',
      'Basic interactive dashboard',
      '1 data pipeline setup',
      '1 revision round',
      '1 member assigned',
      'Delivery in ~1 week',
      'Email support'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    plan: 'Growth',
    price: '$1,500',
    priceNote: 'starting from',
    description: 'For growing companies that need a full ML model or advanced analytics.',
    features: [
      'Everything in Starter',
      'Custom ML model (train + deploy)',
      'Advanced BI dashboard',
      'Both co-founders involved',
      '3 revision rounds',
      'API endpoint for model',
      'Delivery in 2-3 weeks',
      'Priority support'
    ],
    cta: 'Start Project',
    highlighted: true,
    badge: 'Most Popular'
  },
  {
    plan: 'Enterprise',
    price: 'Custom',
    priceNote: 'tailored quote',
    description: 'Full-scale AI systems for businesses that need end-to-end solutions.',
    features: [
      'Full AI/ML pipeline',
      'Complete data infrastructure',
      'Model monitoring & retraining',
      'Both co-founders dedicated',
      'Unlimited revisions',
      'Custom timeline',
      'SLA & dedicated support',
      'Ongoing maintenance option'
    ],
    cta: 'Book a Call',
    highlighted: false
  }
];

export default pricing;
