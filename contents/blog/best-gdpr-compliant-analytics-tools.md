---
date: 2022-05-08
title: The 5 best GDPR-compliant analytics tools
rootPage: /blog
sidebar: Blog
showTitle: true
hideAnchor: true
author: ["joe-martin"]
featuredImage: ../images/blog/posthog-company-culture-blog.png
featuredImageType: full
categories: ["Open source", "Guides", "Privacy"]
---

The European Union's GDPR (General Data Protection Regulation) was created in 2016 to provide a framework which protects user privacy and shape how the data of users in the EU (and the UK) can be stored and shared. It applies to all businesses, non-profits and public organizations across the EU and the penalties for breaking it are severe - up to 4% of your yearly revenue. 

While GDPR has created an essential and much-needed framework for handling user data, it has also complicated the ways in which teams can collect user information. A recent ruling in Austria, for example, punished a business for using Google Analytics and exporting user data to Google's US-based servers. As a result, many teams are now searching for new GDPR-compliant analytics tools for fear that popular tools such as Amplitude, Mixpanel and [Google Analytics may be illegal](https://isgoogleanalyticsillegal.com/). 

## 1. [PostHog](https://posthog.com/product)
![PostHog - best gdpr compliant analytics tools](../images/blog/gdpr-compliant-analytics/posthog-gdpr-compliant.png)

PostHog is an all-in-one, [open source analytics platform](/blog/best-open-source-analytics-tools) that includes tools such as Session Recording, Feature Flags, Heatmaps, and Group Analytics. It’s also available in a self-hosted deployment, which means you can control exactly where user information is stored and how it is processed. 

We believe this extensive feature set makes PostHog a powerful, GDPR compliant [alternative to tools like Amplitude](/blog/posthog-vs-amplitude) and Mixpanel, which only offer cloud-hosted services.

Best of all, PostHog is entirely [self-serve](/blog/Introduction-to-self-service-analytics), with event auto-capture that enables you to start collecting information out of the box and making fast, product-led decisions. 

Of course, we’re somewhat biased in our recommendation here - but don’t just take our word for it. PostHog is entirely open source, meaning that even if you don’t want to book a demo or get started straight away then you can still check out our repo and documentation for more info!

### Who is PostHog for?
PostHog is especially helpful for teams that need to stay in control of their data, want to ensure GDPR compliance or have [concerns about tools such as Google Analytics](https://isgoogleanalyticsillegal.com/). The fact that it is open source and integrates with a wide range of other platforms also makes it an option for large, enterprise-scale businesses which may need to integrate with other systems. 

PostHog is used by many large businesses, including SpaceX, [Hasura](https://posthog.com/customers/hasura), [Phantom](https://posthog.com/customers/phantom), Airbus and YCombinator. 

### Features & benefits
- An all-in-one analytics suite
- Easy to use, no SQL required
- Self-hosting and cloud-hosting available
- Complete control of your data and PostHog instance
- Feature Flags, Heatmaps, Session Recording and more
- Apps to integrate with data warehouses
- Unlimited ability to scale
- Open source, via MIT license

### Is PostHog GDPR compliant?
Yes. PostHog can be deployed onto your own infrastructure, so that you retain full control over who your data is shared with and there are no third-party cookies required in order to collect user data. A cloud-hosted version of PostHog is also available, if you prefer, with servers hosted in the US. 

> [Try PostHog for free](https://posthog.com/) today or [schedule a demo](https://posthog.com/book-a-demo) to learn more.

## 2. [Plausible](https://plausible.io/)
![Plausible Analytics - open source analytics tools](../images/blog/open-source-analytics-tools/plausible-screenshot.png)

Plausible is an open source web analytics platform, created as an alternative to tools such as Google Analytics. This means it offers an effective way to track simple web metrics, such as pageviews and the number of unique visitors, but lacks the depth of a full product analytics platform such as Mixpanel or PostHog. 

Plausible’s lightweight nature does offer several benefits however, such as a small script size which means it has a minimal impact on page performance. This further distinguishes it from the bloat of Google Analytics, while it’s open source approach means users can tailor their deployments if needed. 

Plausible’s intense focus on privacy makes it an attractive option for individuals, but also imposes restrictions on how data can be used and stored. There’s no way to identify users or track behaviour across multiple sessions or devices, for example, and data is only available in aggregate for a single day at a time. 

### Who is Plausible for?
Plausible is an alternative to Google Analytics and is a good fit for small content and marketing teams which need to track simple website metrics, or for freelancers and bloggers who only need to monitor small sites. 

### Features & benefits
- Lightweight script with minimal page speed impact
- Open source, under a AGPL license
- No need for any cookies, at all
- Minimal data collection for users
- No tracking across sessions, devices or sites

### Is Plausible GDPR compliant?
Yes. Plausible can be hosted on your own infrastructure so that data doesn’t have to be shared or sent to third-parties. It also collects minimal amounts of user data and only presents information in an anonymized, aggregated format — there’s no way to view individual users or time periods. 

## 3. [Countly](https://count.ly/)
![Countly - open source analytics tools](../images/blog/open-source-analytics-tools/countly-screenshot.png)

Like PostHog, Countly is a extendable product analytics platform that offers self-hosted open source and enterprise editions, or cloud deployments, for organizations that want to understand product performance and user journeys in greater detail. 

Countly offers a robust suite of features and an extensive range of integrations, including a Net Promoter Score (NPS) survey plugin. The ability to track crashes and errors, and to issue push notifications to mobile users, are also useful additions over most other analytics tools.

### Who is Countly for?
Countly's range of features make it particularly attractive to mobile app developers, especially those working on multi-platform apps across iOS, Mac, Windows, and Android. Its open source Community Edition is available on a AGPL v3 license, though this version removes the majority of its user behavior features, such as retention, revenue tracking, user tracking, cohorts, funnels, and user flow.   

### Features & benefits
- Support for mobile, web, desktop and IoT devices
- Extensible via plugins
- Self-hosting and private cloud deployments available
- Push notifications and crash analytics

### Is Countly GDPR compliant?
Yes. Like PostHog, Countly can be deployed onto your own infrastructure, or in cloud servers based in the EU, so that data isn't stored in servers outside of GDPR jurisdiction.

## 4. Matomo
![Matomo - open source analytics tools](../images/blog/open-source-analytics-tools/matomo-screenshot.png)

Matomo is one of the most popular Google Analytics alternatives because it enables teams to collect a comparable level of information, but can be deployed on-premises so that you don’t need to share information with third-parties. Like PostHog, it’s also open source. 

One of Matomo’s most appealing features is the ability to import existing Google Analytics data into Matomo when getting started, so that you don’t lose any previous insights. It’s also entirely self-serve, which better enables less technical team members to run analysis. 

Matomo offers a wealth of other features, from custom alerts to tag managers and media analytics, though many of these are sold under per-feature subscriptions which can make the cost of on-premise deployments hard to predict. 

### Who is Matomo for?
Matomo is suitable for businesses of all sizes which need an alternative to Google Analytics and aren’t interested in the full suite of product analytics tools offered in platforms such as Amplitude, Mixpanel or PostHog. The cloud version of Matomo is also easy to setup and so is especially appealing to less technical teams. 

### Features & benefits
- Cloud hosting on European servers
- Self-hosting version available
- All-in-one Google Analytics replacement
- Google Analytics importer
- Open source, via GPL 3.0

### Is Matomo GDPR compliant?
Yes. Matomo offers first-party cookies by default and offers robust tools to ensure personally indentifiable information (PII) is anonymised. Additionally, it can be deployed either on-premises, or into EU-based cloud servers.

**Related:** [PostHog and Matomo compared](/blog/posthog-vs-matomo)

## 5. [GoAccess](https://goaccess.io/)
![GoAccess - open source analytics tools](../images/blog/gdpr-compliant-analytics/goaccess-gdpr-compliant.png)

GoAccess is a completely open source web log analyzer and viewer which runs in a browser-based terminal to give you an overview of the most common website metrics. This means it can act as a replacement for tools such as Google Analytics, though it falls short of a product analytics platform in capabilities. 

Functioning in real-time, GoAccess is useful for spotting who is using up your bandwidth and identifying aggressive crawlers or bots, as well as tracking site metrics such as pageviews, visitors and time-on-page. The toolset, design and reliance on a terminal make it a popular choice for sysadmins. 

### Who is GoAccess for?
GoAccess is firmly intended for system administrators and software engineers who need to track web performance across smaller sites. It’s unsuitable for those needing a self-service analytics platform or who need easy integration with other tools or data warehouses. 

### Features & benefits
- Open source, via MIT license
- Completely real-time tracking
- Customizable dashboards
- Runs inside a terminal or browser

### Is GoAccess GDPR compliant?
Sort of. GoAccess can be configured not to collect PII (personally identifying information) and relies on log file stats which may not require cookies. If configured in this way, GoAccess is GDPR compliant. 

> PostHog is an open source analytics platform you can host yourself. We help you build better products faster, without user data ever leaving your infrastructure.

<ArrayCTA />
