import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 49,
    features: [
      'Basic AI chatbot',
      'Social media scheduling',
      'Lead capture forms',
      'Basic analytics',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: 99,
    features: [
      'Advanced AI chatbot',
      'Automated social media management',
      'Advanced lead scoring',
      'Custom analytics dashboard',
      'Priority support',
      'API access',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    features: [
      'Custom AI solutions',
      'Dedicated account manager',
      'Advanced automation',
      'Custom integrations',
      '24/7 phone support',
      'SLA guarantee',
    ],
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Choose your perfect plan
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 xl:p-10 ${
                tier.featured ? 'lg:z-10 lg:rounded-b-none' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-white">{tier.name}</h3>
                </div>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">${tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-300">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}