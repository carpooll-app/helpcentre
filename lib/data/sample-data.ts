import { IndexPage, Settings, Category, Article } from './types'

// Sample data to replace BaseHub content
export const sampleSettings: Settings = {
  logo: {
    url: '/logo-light.png',
    alt: 'Carpooll.com',
    width: 150,
    height: 40
  },
  logoLightMode: {
    url: '/logo-green.png',
    alt: 'Carpooll.com',
    width: 150,
    height: 40
  },
  navLinks: {
    items: [
      {
        _id: '1',
        _title: 'Documentation',
        href: '/docs'
      },
      {
        _id: '2',
        _title: 'Support',
        href: '/support'
      }
    ]
  },
  showUseTemplate: false
}

export const sampleIndexPage: IndexPage = {
  greeting: 'How can we help you?',
  subtitle: {
    json: {
      content: ''
    }
  },
  popularArticlesSection: {
    title: 'Popular Articles',
    articles: [
      {
        _id: 'welcome',
        _title: 'Welcome to Carpooll.com',
        _slug: 'welcome',
        _slugPath: 'getting-started welcome',
        excerpt: 'Get started with Carpooll.com in just a few minutes.',
        ogImage: {
          url: '/images/welcome.jpg'
        },
        author: {
          _title: 'Carpooll.com Team',
          avatar: {
            url: '/images/team-avatar.svg'
          }
        },
        _sys: {
          lastModifiedAt: '2024-01-15T10:00:00Z'
        },
        body: {
          json: {
            content: '# Welcome to Carpooll.com\n\nCarpooll.com is Canada\'s trusted carpool and rideshare platform. Connect with verified drivers and riders to save money, reduce your carbon footprint, and make your commute more enjoyable.\n\n## Getting Started\n\n1. **Download the App**: Get the Carpooll.com app from the App Store or Google Play\n2. **Create an Account**: Sign up with your email and verify your phone number\n3. **Complete Your Profile**: Add a profile photo and verify your identity\n4. **Find or Post a Ride**: Start connecting with other commuters\n\n## Why Choose Carpooll.com?\n\n- **Verified Users**: All drivers and riders are verified for safety\n- **Flexible Options**: Find rides or post your own\n- **Cost Effective**: Split gas and parking costs\n- **Eco-Friendly**: Reduce your carbon footprint\n- **Community**: Meet new people in your area\n\nReady to start your journey? Download the app today!',
            toc: null,
            blocks: []
          }
        },
        related: [
          {
            _id: 'create-account',
            _title: 'How to Create an Account',
            _slug: 'create-account',
            _slugPath: 'getting-started account-setup create-account',
            excerpt: 'Step-by-step guide to creating your Carpooll.com account.',
            ogImage: {
              url: '/images/create-account.jpg'
            },
            author: {
              _title: 'Carpooll.com Team',
              avatar: {
                url: '/images/team-avatar.svg'
              }
            },
            _sys: {
              lastModifiedAt: '2024-01-16T11:00:00Z'
            }
          },
          {
            _id: 'book-first-ride',
            _title: 'How to Book Your First Ride',
            _slug: 'book-first-ride',
            _slugPath: 'getting-started first-ride book-first-ride',
            excerpt: 'Complete guide to booking your first ride on Carpooll.com.',
            ogImage: {
              url: '/images/book-ride.jpg'
            },
            author: {
              _title: 'Carpooll.com Team',
              avatar: {
                url: '/images/team-avatar.svg'
              }
            },
            _sys: {
              lastModifiedAt: '2024-01-17T09:30:00Z'
            }
          }
        ]
      },
      {
        _id: 'rideshare-safety',
        _title: 'Rideshare Safety Guidelines',
        _slug: 'rideshare-safety',
        _slugPath: 'rideshare rideshare-safety',
        excerpt: 'Essential safety tips for drivers and passengers using Carpooll.com.',
        ogImage: {
          url: '/images/safety.jpg'
        },
        author: {
          _title: 'Safety Team',
          avatar: {
            url: '/images/team-avatar.svg'
          }
        },
        _sys: {
          lastModifiedAt: '2024-01-20T14:30:00Z'
        },
        body: {
          json: {
            content: '# Rideshare Safety Guidelines\n\nYour safety is our top priority. Follow these guidelines for a safe ridesharing experience.\n\n## General Safety Tips\n\n### Before Your Ride\n- Verify your driver/rider\'s profile\n- Check ratings and reviews\n- Share your trip details with a friend\n- Have emergency contacts ready\n\n### During Your Ride\n- Trust your instincts\n- Keep your phone charged\n- Stay alert and aware\n- Follow traffic laws\n\n## Driver Safety\n\n- **Vehicle Maintenance**: Keep your car in good condition\n- **Insurance**: Ensure you have proper coverage\n- **Background Check**: Complete verification process\n- **Emergency Kit**: Keep first aid and emergency supplies\n\n## Passenger Safety\n\n- **Verify Driver**: Check driver\'s photo and details\n- **Share Location**: Let someone know where you are\n- **Be Respectful**: Follow driver\'s rules\n- **Report Issues**: Contact support if needed\n\n## Emergency Features\n\n- **SOS Button**: Quick access to emergency services\n- **Trip Tracking**: Real-time location sharing\n- **24/7 Support**: Always available help\n- **Incident Reporting**: Easy way to report issues\n\n## Trust and Verification\n\n- All users are verified\n- Background checks for drivers\n- Photo verification required\n- Community ratings and reviews\n\nStay safe and enjoy your ridesharing experience!',
            toc: null,
            blocks: []
          }
        },
        related: [
          {
            _id: 'rideshare-basics',
            _title: 'Rideshare Basics: How It Works',
            _slug: 'rideshare-basics',
            _slugPath: 'rideshare rideshare-basics rideshare-basics',
            excerpt: 'Learn the fundamentals of how ridesharing works on Carpooll.com.',
            ogImage: {
              url: '/images/rideshare-basics.jpg'
            },
            author: {
              _title: 'Rideshare Team',
              avatar: {
                url: '/images/team-avatar.svg'
              }
            },
            _sys: {
              lastModifiedAt: '2024-01-25T09:15:00Z'
            }
          },
          {
            _id: 'rideshare-driver-tips',
            _title: 'Tips for Successful Ridesharing',
            _slug: 'rideshare-driver-tips',
            _slugPath: 'rideshare driver-tips rideshare-driver-tips',
            excerpt: 'Expert tips to make your ridesharing experience successful and profitable.',
            ogImage: {
              url: '/images/driver-tips.jpg'
            },
            author: {
              _title: 'Experienced Driver',
              avatar: {
                url: '/images/team-avatar.svg'
              }
            },
            _sys: {
              lastModifiedAt: '2024-01-27T13:45:00Z'
            }
          },
          {
            _id: 'pinkpool',
            _title: 'Pinkpool: Women-Only Rides',
            _slug: 'pinkpool',
            _slugPath: 'features advanced-features pinkpool',
            excerpt: 'Learn about our women-only ride feature for enhanced safety.',
            ogImage: {
              url: '/images/pinkpool.jpg'
            },
            author: {
              _title: 'Carpooll.com Team',
              avatar: {
                url: '/images/team-avatar.svg'
              }
            },
            _sys: {
              lastModifiedAt: '2024-01-22T16:45:00Z'
            }
          }
        ]
      },
      {
        _id: 'driver-tips',
        _title: 'Driver Tips for Success',
        _slug: 'rideshare-driver-tips',
        _slugPath: 'rideshare rideshare-driver-tips',
        excerpt: 'Learn how to be a successful driver on Carpooll.com and earn more.',
        ogImage: {
          url: '/images/driver-tips.jpg'
        },
        author: {
          _title: 'Driver Support',
          avatar: {
            url: '/images/team-avatar.svg'
          }
        },
        _sys: {
          lastModifiedAt: '2024-01-22T16:45:00Z'
        }
      },
      {
        _id: 'payment-guide',
        _title: 'Payment and Billing Guide',
        _slug: 'payment-guide',
        _slugPath: 'features payment-guide',
        excerpt: 'Everything you need to know about payments, billing, and fees.',
        ogImage: {
          url: '/images/payment.jpg'
        },
        author: {
          _title: 'Finance Team',
          avatar: {
            url: '/images/team-avatar.svg'
          }
        },
        _sys: {
          lastModifiedAt: '2024-01-18T12:20:00Z'
        }
      },
      {
        _id: 'account-verification',
        _title: 'Account Verification Process',
        _slug: 'account-verification',
        _slugPath: 'getting-started account-verification',
        excerpt: 'Complete guide to verifying your account for enhanced security.',
        ogImage: {
          url: '/images/verification.jpg'
        },
        author: {
          _title: 'Security Team',
          avatar: {
            url: '/images/team-avatar.svg'
          }
        },
        _sys: {
          lastModifiedAt: '2024-01-24T09:10:00Z'
        }
      },
      {
        _id: 'emergency-support',
        _title: 'Emergency Support and SOS',
        _slug: 'emergency-support',
        _slugPath: 'safety emergency-support',
        excerpt: 'How to use emergency features and get help when you need it.',
        ogImage: {
          url: '/images/emergency.jpg'
        },
        author: {
          _title: 'Support Team',
          avatar: {
            url: '/images/team-avatar.svg'
          }
        },
        _sys: {
          lastModifiedAt: '2024-01-26T11:30:00Z'
        }
      },
      {
        _id: 'app-features',
        _title: 'App Features Overview',
        _slug: 'app-features',
        _slugPath: 'features core-features app-features',
        excerpt: 'Explore all the features available in the Carpooll.com app.',
        ogImage: {
          url: '/images/app-features.jpg'
        },
        author: {
          _title: 'Carpooll.com Team',
          avatar: {
            url: '/images/team-avatar.svg'
          }
        },
        _sys: {
          lastModifiedAt: '2024-01-20T14:30:00Z'
        }
      },
      {
        _id: 'pinkpool',
        _title: 'Pinkpool: Women-Only Rides',
        _slug: 'pinkpool',
        _slugPath: 'features advanced-features pinkpool',
        excerpt: 'Learn about our women-only ride feature for enhanced safety.',
        ogImage: {
          url: '/images/pinkpool.jpg'
        },
        author: {
          _title: 'Carpooll.com Team',
          avatar: {
            url: '/images/team-avatar.svg'
          }
        },
        _sys: {
          lastModifiedAt: '2024-01-22T16:45:00Z'
        }
      },
      {
        _id: 'rideshare-basics',
        _title: 'Rideshare Basics: How It Works',
        _slug: 'rideshare-basics',
        _slugPath: 'rideshare rideshare-basics rideshare-basics',
        excerpt: 'Learn the fundamentals of how ridesharing works on Carpooll.com.',
        ogImage: {
          url: '/images/rideshare-basics.jpg'
        },
        author: {
          _title: 'Rideshare Team',
          avatar: {
            url: '/images/team-avatar.svg'
          }
        },
        _sys: {
          lastModifiedAt: '2024-01-25T09:15:00Z'
        }
      },
      {
        _id: 'create-account',
        _title: 'How to Create an Account',
        _slug: 'create-account',
        _slugPath: 'getting-started account-setup create-account',
        excerpt: 'Step-by-step guide to creating your Carpooll.com account.',
        ogImage: {
          url: '/images/create-account.jpg'
        },
        author: {
          _title: 'Carpooll.com Team',
          avatar: {
            url: '/images/team-avatar.svg'
          }
        },
        _sys: {
          lastModifiedAt: '2024-01-16T11:00:00Z'
        }
      }
    ]
  },
  categoriesSection: {
    title: 'Browse by Category',
    categories: {
      items: []
    }
  },
  rights: '© 2024 Carpooll.com. All rights reserved.',
  socialMediaLinks: {
    items: [
      {
        _id: '1',
        platform: 'facebook',
        url: 'https://www.facebook.com/people/Carpoollcom/61564996533647/'
      },
      {
        _id: '2',
        platform: 'twitter',
        url: 'https://x.com/carpoollcom'
      },
      {
        _id: '3',
        platform: 'linkedin',
        url: 'https://www.linkedin.com/company/greenpool-ca/'
      },
      {
        _id: '4',
        platform: 'instagram',
        url: 'https://www.instagram.com/carpoollcom/'
      }
    ]
  }
}

export const sampleCategories: Category[] = [
  {
    _id: 'getting-started',
    _title: 'Getting Started',
    _slug: 'getting-started',
    description: 'Learn the basics of using Carpooll.com',
    icon: 'rocket',
    ogImage: {
      url: '/images/getting-started.jpg'
    },
    subcategories: {
      items: [
        {
          _id: 'account-setup',
          _title: 'Account Setup',
          _slug: 'account-setup',
          articles: {
            items: [
              {
                _id: 'welcome',
                _title: 'Welcome to Carpooll.com',
                _slug: 'welcome',
                _slugPath: 'getting-started account-setup welcome',
                excerpt: 'Get started with Carpooll.com in just a few minutes.',
                ogImage: {
                  url: '/images/welcome.jpg'
                },
                author: {
                  _title: 'Carpooll.com Team',
                  avatar: {
                    url: '/images/team-avatar.svg'
                  }
                },
                _sys: {
                  lastModifiedAt: '2024-01-15T10:00:00Z'
                },
                body: {
                  json: {
                    content: '# Welcome to Carpooll.com\n\nCarpooll.com is Canada\'s trusted carpool and rideshare platform. Connect with verified drivers and riders to save money, reduce your carbon footprint, and make your commute more enjoyable.\n\n## Getting Started\n\n1. **Download the App**: Get the Carpooll.com app from the App Store or Google Play\n2. **Create an Account**: Sign up with your email and verify your phone number\n3. **Complete Your Profile**: Add a profile photo and verify your identity\n4. **Find or Post a Ride**: Start connecting with other commuters\n\n## Why Choose Carpooll.com?\n\n- **Verified Users**: All drivers and riders are verified for safety\n- **Flexible Options**: Find rides or post your own\n- **Cost Effective**: Split gas and parking costs\n- **Eco-Friendly**: Reduce your carbon footprint\n- **Community**: Meet new people in your area\n\nReady to start your journey? Download the app today!',
                    toc: null,
                    blocks: []
                  }
                },
                related: [
                  {
                    _id: 'create-account',
                    _title: 'How to Create an Account',
                    _slug: 'create-account',
                    _slugPath: 'getting-started account-setup create-account',
                    excerpt: 'Step-by-step guide to creating your Carpooll.com account.',
                    ogImage: {
                      url: '/images/create-account.jpg'
                    },
                    author: {
                      _title: 'Carpooll.com Team',
                      avatar: {
                        url: '/images/team-avatar.svg'
                      }
                    },
                    _sys: {
                      lastModifiedAt: '2024-01-16T11:00:00Z'
                    }
                  },
                  {
                    _id: 'book-first-ride',
                    _title: 'How to Book Your First Ride',
                    _slug: 'book-first-ride',
                    _slugPath: 'getting-started first-ride book-first-ride',
                    excerpt: 'Complete guide to booking your first ride on Carpooll.com.',
                    ogImage: {
                      url: '/images/book-ride.jpg'
                    },
                    author: {
                      _title: 'Carpooll.com Team',
                      avatar: {
                        url: '/images/team-avatar.svg'
                      }
                    },
                    _sys: {
                      lastModifiedAt: '2024-01-17T09:30:00Z'
                    }
                  }
                ]
              },
              {
                _id: 'create-account',
                _title: 'How to Create an Account',
                _slug: 'create-account',
                _slugPath: 'getting-started account-setup create-account',
                excerpt: 'Step-by-step guide to creating your Carpooll.com account.',
                ogImage: {
                  url: '/images/create-account.jpg'
                },
                author: {
                  _title: 'Carpooll.com Team',
                  avatar: {
                    url: '/images/team-avatar.svg'
                  }
                },
                _sys: {
                  lastModifiedAt: '2024-01-16T11:00:00Z'
                },
                body: {
                  json: {
                    content: '# How to Create an Account\n\nFollow these simple steps to create your Carpooll.com account:\n\n## Step 1: Download the App\n- Visit the App Store (iOS) or Google Play Store (Android)\n- Search for "Carpooll.com"\n- Download and install the app\n\n## Step 2: Sign Up\n- Open the app and tap "Sign Up"\n- Enter your email address\n- Create a strong password\n- Verify your email address\n\n## Step 3: Complete Your Profile\n- Add your full name\n- Upload a profile photo\n- Verify your phone number\n- Add your home and work addresses\n\n## Step 4: Verify Your Identity\n- Provide a valid government ID\n- Complete the verification process\n- Wait for approval (usually within 24 hours)\n\nOnce verified, you can start using all features of Carpooll.com!',
                    toc: null,
                    blocks: []
                  }
                }
              }
            ]
          }
        },
        {
          _id: 'first-ride',
          _title: 'Your First Ride',
          _slug: 'first-ride',
          articles: {
            items: [
              {
                _id: 'book-first-ride',
                _title: 'How to Book Your First Ride',
                _slug: 'book-first-ride',
                _slugPath: 'getting-started first-ride book-first-ride',
                excerpt: 'Complete guide to booking your first ride on Carpooll.com.',
                ogImage: {
                  url: '/images/book-ride.jpg'
                },
                author: {
                  _title: 'Carpooll.com Team',
                  avatar: {
                    url: '/images/team-avatar.svg'
                  }
                },
                _sys: {
                  lastModifiedAt: '2024-01-17T09:30:00Z'
                },
                body: {
                  json: {
                    content: '# How to Book Your First Ride\n\nReady to book your first ride? Here\'s everything you need to know:\n\n## Finding a Ride\n1. Open the Carpooll.com app\n2. Enter your destination\n3. Choose your preferred time\n4. Browse available rides\n5. Check driver ratings and reviews\n\n## Booking Process\n1. Select a ride that works for you\n2. Review the details (price, time, driver info)\n3. Tap "Book Ride"\n4. Confirm your booking\n5. Pay securely through the app\n\n## Before Your Ride\n- Message your driver to confirm pickup location\n- Arrive at the pickup point 5 minutes early\n- Have your payment method ready\n- Bring any necessary items\n\n## During Your Ride\n- Be respectful and friendly\n- Follow safety guidelines\n- Enjoy the journey!\n\n## After Your Ride\n- Rate your driver\n- Leave a review\n- Consider booking with them again\n\nHappy carpooling!',
                    toc: null,
                    blocks: []
                  }
                }
              }
            ]
          }
        }
      ]
    },
    articles: {
      items: []
    }
  },
  {
    _id: 'features',
    _title: 'Features',
    _slug: 'features',
    description: 'Discover all the features Carpooll.com has to offer',
    icon: 'star',
    ogImage: {
      url: '/images/features.jpg'
    },
    subcategories: {
      items: [
        {
          _id: 'core-features',
          _title: 'Core Features',
          _slug: 'core-features',
          articles: {
            items: [
              {
                _id: 'app-features',
                _title: 'App Features Overview',
                _slug: 'app-features',
                _slugPath: 'features core-features app-features',
                excerpt: 'Explore all the features available in the Carpooll.com app.',
                ogImage: {
                  url: '/images/app-features.jpg'
                },
                author: {
                  _title: 'Carpooll.com Team',
                  avatar: {
                    url: '/images/team-avatar.svg'
                  }
                },
                _sys: {
                  lastModifiedAt: '2024-01-20T14:30:00Z'
                },
                body: {
                  json: {
                    content: '# Carpooll.com App Features\n\nOur app is designed to make carpooling simple, safe, and convenient.\n\n## Core Features\n\n### Find Rides\n- Search for available rides in your area\n- Filter by destination, time, and price\n- View driver profiles and ratings\n- Book rides instantly\n\n### Post Rides\n- Share your commute with others\n- Set your own price and schedule\n- Choose your passengers\n- Earn money while helping the environment\n\n### Safety Features\n- User verification system\n- Real-time trip tracking\n- Emergency contact sharing\n- 24/7 support\n\n### Communication\n- In-app messaging\n- Trip notifications\n- Rating and review system\n- Community features\n\n## Advanced Features\n\n- **Pinkpool**: Women-only rides for added safety\n- **Corporate Accounts**: Business carpooling solutions\n- **Route Optimization**: Find the best carpool routes\n- **Payment Integration**: Secure in-app payments\n\nDownload the app to experience all these features!',
                    toc: null,
                    blocks: []
                  }
                }
              }
            ]
          }
        },
        {
          _id: 'advanced-features',
          _title: 'Advanced Features',
          _slug: 'advanced-features',
          articles: {
            items: [
              {
                _id: 'pinkpool',
                _title: 'Pinkpool: Women-Only Rides',
                _slug: 'pinkpool',
                _slugPath: 'features advanced-features pinkpool',
                excerpt: 'Learn about our women-only ride feature for enhanced safety.',
                ogImage: {
                  url: '/images/pinkpool.jpg'
                },
                author: {
                  _title: 'Carpooll.com Team',
                  avatar: {
                    url: '/images/team-avatar.svg'
                  }
                },
                _sys: {
                  lastModifiedAt: '2024-01-22T16:45:00Z'
                },
                body: {
                  json: {
                    content: '# Pinkpool: Women-Only Rides\n\nPinkpool is our exclusive feature that allows women to offer and book rides with other women only.\n\n## What is Pinkpool?\n\nPinkpool is a safety-focused feature that enables women to:\n- Offer rides exclusively to women\n- Book rides from women drivers only\n- Create a more comfortable carpooling experience\n- Build a community of women commuters\n\n## How to Use Pinkpool\n\n### For Drivers\n1. Go to your profile settings\n2. Enable Pinkpool feature\n3. Your rides will be marked as women-only\n4. Only women can book your rides\n\n### For Riders\n1. Search for rides as usual\n2. Look for the pink pool icon\n3. Book women-only rides\n4. Enjoy a comfortable journey\n\n## Safety Benefits\n- Verified women users only\n- Enhanced privacy and comfort\n- Community of women commuters\n- 24/7 support for women users\n\nPinkpool is available to all verified women users on Carpooll.com.',
                    toc: null,
                    blocks: []
                  }
                }
              }
            ]
          }
        }
      ]
    },
    articles: {
      items: []
    }
  },
  {
    _id: 'rideshare',
    _title: 'Rideshare',
    _slug: 'rideshare',
    description: 'Everything you need to know about ridesharing',
    icon: 'car',
    ogImage: {
      url: '/images/rideshare.jpg'
    },
    subcategories: {
      items: [
        {
          _id: 'rideshare-basics',
          _title: 'Rideshare Basics',
          _slug: 'rideshare-basics',
          articles: {
            items: [
              {
                _id: 'rideshare-basics-article',
                _title: 'Rideshare Basics: How It Works',
                _slug: 'rideshare-basics',
                _slugPath: 'rideshare rideshare-basics rideshare-basics',
                excerpt: 'Learn the fundamentals of how ridesharing works on Carpooll.com.',
                ogImage: {
                  url: '/images/rideshare-basics.jpg'
                },
                author: {
                  _title: 'Rideshare Team',
                  avatar: {
                    url: '/images/team-avatar.svg'
                  }
                },
                _sys: {
                  lastModifiedAt: '2024-01-25T09:15:00Z'
                },
                body: {
                  json: {
                    content: '# Rideshare Basics: How It Works\n\nRidesharing is a simple concept: share your car with others going in the same direction.\n\n## What is Ridesharing?\n\nRidesharing is when you:\n- Share your car with passengers\n- Split the cost of gas and parking\n- Reduce traffic and pollution\n- Meet new people in your community\n\n## How Carpooll.com Works\n\n### For Drivers\n1. **Post a Ride**: Share your route and schedule\n2. **Set Your Price**: Choose how much to charge\n3. **Accept Passengers**: Review and approve bookings\n4. **Drive and Earn**: Get paid for your rides\n\n### For Passengers\n1. **Find a Ride**: Search for available rides\n2. **Book Your Seat**: Reserve your spot\n3. **Meet Your Driver**: Connect at the pickup point\n4. **Enjoy the Ride**: Split costs and make friends\n\n## Benefits of Ridesharing\n\n- **Save Money**: Split transportation costs\n- **Help the Environment**: Reduce carbon emissions\n- **Reduce Traffic**: Fewer cars on the road\n- **Build Community**: Meet new people\n- **Flexible Schedule**: Choose when to travel\n\nStart ridesharing today and experience the benefits!',
                    toc: null,
                    blocks: []
                  }
                }
              }
            ]
          }
        },
        {
          _id: 'safety',
          _title: 'Safety & Security',
          _slug: 'safety',
          articles: {
            items: [
              {
                _id: 'rideshare-safety',
                _title: 'Rideshare Safety Guidelines',
                _slug: 'rideshare-safety',
                _slugPath: 'rideshare safety rideshare-safety',
                excerpt: 'Essential safety tips for both drivers and passengers.',
                ogImage: {
                  url: '/images/safety.jpg'
                },
                author: {
                  _title: 'Safety Team',
                  avatar: {
                    url: '/images/team-avatar.svg'
                  }
                },
                _sys: {
                  lastModifiedAt: '2024-01-26T11:20:00Z'
                },
                body: {
                  json: {
                    content: '# Rideshare Safety Guidelines\n\nYour safety is our top priority. Follow these guidelines for a safe ridesharing experience.\n\n## General Safety Tips\n\n### Before Your Ride\n- Verify your driver/rider\'s profile\n- Check ratings and reviews\n- Share your trip details with a friend\n- Have emergency contacts ready\n\n### During Your Ride\n- Trust your instincts\n- Keep your phone charged\n- Stay alert and aware\n- Follow traffic laws\n\n## Driver Safety\n\n- **Vehicle Maintenance**: Keep your car in good condition\n- **Insurance**: Ensure you have proper coverage\n- **Background Check**: Complete verification process\n- **Emergency Kit**: Keep first aid and emergency supplies\n\n## Passenger Safety\n\n- **Verify Driver**: Check driver\'s photo and details\n- **Share Location**: Let someone know where you are\n- **Be Respectful**: Follow driver\'s rules\n- **Report Issues**: Contact support if needed\n\n## Emergency Features\n\n- **SOS Button**: Quick access to emergency services\n- **Trip Tracking**: Real-time location sharing\n- **24/7 Support**: Always available help\n- **Incident Reporting**: Easy way to report issues\n\n## Trust and Verification\n\n- All users are verified\n- Background checks for drivers\n- Photo verification required\n- Community ratings and reviews\n\nStay safe and enjoy your ridesharing experience!',
                    toc: null,
                    blocks: []
                  }
                },
                related: [
                  {
                    _id: 'rideshare-basics',
                    _title: 'Rideshare Basics: How It Works',
                    _slug: 'rideshare-basics',
                    _slugPath: 'rideshare rideshare-basics rideshare-basics',
                    excerpt: 'Learn the fundamentals of how ridesharing works on Carpooll.com.',
                    ogImage: {
                      url: '/images/rideshare-basics.jpg'
                    },
                    author: {
                      _title: 'Rideshare Team',
                      avatar: {
                        url: '/images/team-avatar.svg'
                      }
                    },
                    _sys: {
                      lastModifiedAt: '2024-01-25T09:15:00Z'
                    }
                  },
                  {
                    _id: 'rideshare-driver-tips',
                    _title: 'Tips for Successful Ridesharing',
                    _slug: 'rideshare-driver-tips',
                    _slugPath: 'rideshare driver-tips rideshare-driver-tips',
                    excerpt: 'Expert tips to make your ridesharing experience successful and profitable.',
                    ogImage: {
                      url: '/images/driver-tips.jpg'
                    },
                    author: {
                      _title: 'Experienced Driver',
                      avatar: {
                        url: '/images/team-avatar.svg'
                      }
                    },
                    _sys: {
                      lastModifiedAt: '2024-01-27T13:45:00Z'
                    }
                  },
                  {
                    _id: 'pinkpool',
                    _title: 'Pinkpool: Women-Only Rides',
                    _slug: 'pinkpool',
                    _slugPath: 'features advanced-features pinkpool',
                    excerpt: 'Learn about our women-only ride feature for enhanced safety.',
                    ogImage: {
                      url: '/images/pinkpool.jpg'
                    },
                    author: {
                      _title: 'Carpooll.com Team',
                      avatar: {
                        url: '/images/team-avatar.svg'
                      }
                    },
                    _sys: {
                      lastModifiedAt: '2024-01-22T16:45:00Z'
                    }
                  }
                ]
              }
            ]
          }
        },
        {
          _id: 'driver-tips',
          _title: 'Driver Tips',
          _slug: 'driver-tips',
          articles: {
            items: [
              {
                _id: 'rideshare-driver-tips',
                _title: 'Tips for Successful Ridesharing',
                _slug: 'rideshare-driver-tips',
                _slugPath: 'rideshare driver-tips rideshare-driver-tips',
                excerpt: 'Expert tips to make your ridesharing experience successful and profitable.',
                ogImage: {
                  url: '/images/driver-tips.jpg'
                },
                author: {
                  _title: 'Experienced Driver',
                  avatar: {
                    url: '/images/team-avatar.svg'
                  }
                },
                _sys: {
                  lastModifiedAt: '2024-01-27T13:45:00Z'
                },
                body: {
                  json: {
                    content: '# Tips for Successful Ridesharing\n\nMake the most of your ridesharing experience with these proven tips.\n\n## Setting Up for Success\n\n### Vehicle Preparation\n- Keep your car clean and well-maintained\n- Ensure comfortable seating\n- Have charging cables available\n- Stock up on water and snacks\n\n### Profile Optimization\n- Use a clear, friendly profile photo\n- Write a welcoming bio\n- Set competitive prices\n- Maintain a high rating\n\n## Communication Skills\n\n### Before the Ride\n- Confirm pickup location clearly\n- Set expectations for timing\n- Ask about luggage or special needs\n- Be friendly and professional\n\n### During the Ride\n- Make conversation if comfortable\n- Respect passenger preferences\n- Follow the planned route\n- Keep the environment pleasant\n\n## Business Tips\n\n### Pricing Strategy\n- Research local rates\n- Consider your costs (gas, maintenance)\n- Offer competitive pricing\n- Adjust for peak times\n\n### Building Regular Customers\n- Provide excellent service\n- Be reliable and punctual\n- Build relationships\n- Ask for reviews and referrals\n\n## Safety and Legal\n\n- Maintain proper insurance\n- Follow all traffic laws\n- Keep records of your rides\n- Report any issues promptly\n\n## Maximizing Earnings\n\n- Drive during peak hours\n- Offer rides to popular destinations\n- Build a regular schedule\n- Consider longer trips\n\nFollow these tips to become a successful rideshare driver!',
                    toc: null,
                    blocks: []
                  }
                }
              }
            ]
          }
        }
      ]
    },
    articles: {
      items: []
    }
  },
  {
    _id: 'faq',
    _title: 'FAQ',
    _slug: 'faq',
    description: 'Frequently asked questions and answers',
    icon: 'question-mark',
    ogImage: {
      url: '/images/faq.jpg'
    },
    subcategories: {
      items: [
        {
          _id: 'general-faq',
          _title: 'General Questions',
          _slug: 'general-faq',
          description: 'Common questions about Carpooll.com',
          articles: {
            items: [
              {
                _id: 'general-faq-article',
                _title: 'Frequently Asked Questions',
                _slug: 'general-faq',
                _slugPath: 'faq general-faq general-faq',
                excerpt: 'Find answers to the most common questions about Carpooll.com.',
                ogImage: {
                  url: '/images/faq.jpg'
                },
                author: {
                  _title: 'Support Team',
                  avatar: {
                    url: '/images/team-avatar.svg'
                  }
                },
                _sys: {
                  lastModifiedAt: '2024-01-28T10:00:00Z'
                },
                body: {
                  json: {
                    content: '# Frequently Asked Questions\n\nFind answers to the most common questions about Carpooll.com.\n\n## Account & Registration\n\n**Q: How do I create an account?**\nA: Download the app, tap "Sign Up," and follow the registration process with your email and phone number.\n\n**Q: Is Carpooll.com free to use?**\nA: Creating an account is free. You only pay for the rides you book or earn money from rides you offer.\n\n**Q: How do I verify my account?**\nA: Provide a valid government ID and complete the verification process. Approval usually takes 24 hours.\n\n## Booking & Payment\n\n**Q: How do I book a ride?**\nA: Search for available rides, select one that works for you, and tap "Book Ride" to confirm.\n\n**Q: What payment methods are accepted?**\nA: We accept credit cards, debit cards, and digital wallets like Apple Pay and Google Pay.\n\n**Q: Can I cancel a booking?**\nA: Yes, you can cancel up to 2 hours before the ride. Late cancellations may incur fees.\n\n## Safety & Security\n\n**Q: How do you ensure safety?**\nA: All users are verified, we have real-time tracking, emergency features, and 24/7 support.\n\n**Q: What if I have a problem during my ride?**\nA: Use the SOS button for emergencies or contact our support team immediately.\n\n**Q: Are drivers background checked?**\nA: Yes, all drivers complete background checks and identity verification.\n\n## Technical Support\n\n**Q: The app isn\'t working. What should I do?**\nA: Try restarting the app, check your internet connection, or contact our support team.\n\n**Q: How do I update my profile?**\nA: Go to Settings > Profile to update your information, photo, or preferences.\n\n**Q: Can I use Carpooll.com in multiple cities?**\nA: Yes, you can use the app anywhere Carpooll.com operates.\n\nStill have questions? Contact our support team!',
                    toc: null,
                    blocks: []
                  }
                }
              }
            ]
          }
        },
        {
          _id: 'troubleshooting',
          _title: 'Troubleshooting',
          _slug: 'troubleshooting',
          description: 'Common issues and how to fix them',
          articles: {
            items: [
              {
                _id: 'app-troubleshooting',
                _title: 'App Troubleshooting Guide',
                _slug: 'app-troubleshooting',
                _slugPath: 'faq troubleshooting app-troubleshooting',
                excerpt: 'Solutions for common app issues and problems.',
                ogImage: {
                  url: '/images/troubleshooting.jpg'
                },
                author: {
                  _title: 'Technical Support',
                  avatar: {
                    url: '/images/team-avatar.svg'
                  }
                },
                _sys: {
                  lastModifiedAt: '2024-01-29T14:30:00Z'
                },
                body: {
                  json: {
                    content: '# App Troubleshooting Guide\n\nHaving issues with the Carpooll.com app? Here are solutions to common problems.\n\n## App Won\'t Open\n\n### Try These Steps:\n1. **Restart the App**: Close and reopen the app\n2. **Check Internet**: Ensure you have a stable connection\n3. **Update App**: Download the latest version\n4. **Restart Device**: Power cycle your phone\n5. **Clear Cache**: Go to Settings > Apps > Clear Cache\n\n## Can\'t Book a Ride\n\n### Common Solutions:\n- **Check Location**: Enable location services\n- **Verify Account**: Ensure your account is verified\n- **Check Payment**: Verify your payment method\n- **Try Again**: Sometimes it\'s a temporary issue\n\n## Payment Issues\n\n### Troubleshooting Steps:\n1. **Check Card**: Ensure your card is valid\n2. **Update Payment**: Add a new payment method\n3. **Contact Bank**: Verify with your bank\n4. **Try Different Card**: Use an alternative payment method\n\n## Location Problems\n\n### Fix Location Issues:\n- **Enable GPS**: Turn on location services\n- **Check Permissions**: Allow location access\n- **Restart GPS**: Toggle location off and on\n- **Update Maps**: Ensure maps are current\n\n## Messaging Issues\n\n### Resolve Communication Problems:\n- **Check Internet**: Ensure stable connection\n- **Restart Chat**: Close and reopen messages\n- **Update App**: Get the latest version\n- **Contact Support**: If problems persist\n\n## Still Having Issues?\n\nIf these solutions don\'t work:\n1. Contact our support team\n2. Include your device model and OS version\n3. Describe the exact problem\n4. Provide screenshots if possible\n\nWe\'re here to help!',
                    toc: null,
                    blocks: []
                  }
                }
              }
            ]
          }
        }
      ]
    },
    articles: {
      items: []
    }
  }
]

// Add Rideshare category to homepage categories
sampleIndexPage.categoriesSection.categories.items = [
  ...sampleCategories
]

// Helper function to get all articles for search
export const getAllArticles = (): Article[] => {
  const allArticles: Article[] = []
  
  sampleCategories.forEach(category => {
    // Add articles from subcategories
    category.subcategories.items.forEach(subcategory => {
      subcategory.articles.items.forEach(article => {
        allArticles.push(article)
      })
    })
    
    // Add articles directly from category (if any)
    category.articles.items.forEach(article => {
      allArticles.push(article)
    })
  })
  
  return allArticles
}

// Helper function to find category by slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return sampleCategories.find(category => category._slug === slug)
}

// Helper function to find subcategory by slug
export const getSubcategoryBySlug = (categorySlug: string, subcategorySlug: string) => {
  const category = getCategoryBySlug(categorySlug)
  return category?.subcategories.items.find(subcategory => subcategory._slug === subcategorySlug)
}

// Helper function to find article by slug
export const getArticleBySlug = (categorySlug: string, articleSlug: string, subcategorySlug?: string): Article | undefined => {
  if (subcategorySlug) {
    const subcategory = getSubcategoryBySlug(categorySlug, subcategorySlug)
    return subcategory?.articles.items.find(article => article._slug === articleSlug)
  }
  
  const category = getCategoryBySlug(categorySlug)
  return category?.articles.items.find(article => article._slug === articleSlug)
} 