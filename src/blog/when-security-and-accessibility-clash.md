---
title: "When security and accessibility clash: why are banking applications so inaccessible?"
date: "2024-04-17"
description: "A quick exploration of accessibility anti-patterns in banking applications"
tags:
  - accessibility
  - featured
---

Let's be real, regardless of your ability level, most banking applications are not particularly fun to use. They tend to be bogged down with difficult interfaces that could make a UX designer cry.

While using different bank applications, I’ve noticed a disturbing trend where so-called ‘security' features are actively making the website a more hostile experience for disabled users. Below, I've rounded up some of the worst anti-patterns to discuss how they are creating blockers for disabled people.

## Disabling copy and paste / password managers

It’s become increasingly common to see sites preventing copy and paste on password fields. [Nicholas C. Zakas has written an extensive blog post](https://humanwhocodes.com/blog/2023/07/disabling-paste-textboxes-security/) on why this pattern is a bad idea in terms of security. The newly formalized Web Content Accessibility Guidelines (WCAG) 2.2 has added [Success Criterion 3.3.8](https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum), which explicitly mentions support for copy and paste as well as password managers as valid mechanisms for satisfying this criterion.

Blocking copy and paste often has the effect of blocking password managers as well. I’m sure I don’t need to go into detail about how frustrating this can be for password manager users, who often use those password managers to generate long passwords of random alphanumeric strings that they now have to type in character by character. Logging in, a process that should take me 10 seconds at most, can take up to 5 minutes of painful trial and error.

For example, the mobile banking app for DBS Ideal blocks copy and paste on the authentication screen. They’ve also disabled the default keyboard in order to show their own keyboard instead, which uses their brand's red lettering on a white background. This color scheme does not mean color contrast requirements, and even I, someone with decent vision, struggled to read it. I would include a screenshot here, but they've disabled the ability to take screenshots of their application.🤷

For voice dictation users, disabling password managers is even more disastrous. The voice dictation software Dragon is a hands-free experience that works entirely by the user dictating voice commands to the software. A loose example (not actual Dragon) of a command might be something like ‘Click [Password Manager] Extension’ > ‘Search [Bank Name]’ > ‘Choose second item on a list ’, which would populate the username and password fields automatically. By disabling copy and paste, the user is instead forced to dictate their entire password out loud, which means that a Dragon user must be in a place where no one is within earshot in order to maintain a reasonable expectation of privacy.

What’s worst of all, in contrast to what the application authors intended, disabling copy and paste and password managers may actually have a negative impact on security as it encourages the [reuse of passwords](https://www.zdnet.com/article/were-all-still-using-the-same-passwords-even-after-theyve-been-breached/). Though there is increasing public awareness on why password reuse is bad, people are unlikely to change their behavior until the alternative is easy, and right now, it’s definitely not easy.

## CAPTCHA

A CAPTCHA is a type of test employed by web developers to be able to tell if the user is a real human or a robot. Though it is rarer these days for most users to see CAPTCHAs in the wild due to widespread adoption of reCAPTCHA v3, a service by Google that claims to be able to detect malicious actors without real users interacting with a challenge. Privacy concerns aside for a moment, it can be difficult for behavioral based heuristics to distinguish disabled users from bots. For example, a screen reader user may come across as a bot due to not having normal mouse movement. However, due to the legal compliance and privacy issues arising from using a third-party service, banks that have a CAPTCHA often roll their own solution, which may not be tested comprehensively with disabled users.

Traditional CAPTCHAs typically rely on showing text that is partially obfuscated, and asking the user to decipher the text. If a site is using this type of CAPTCHA, at a bare minimum, some kind of audio CAPTCHA is required too, as blind screen reader users will not be able to parse images of text. Much has been said about the inaccessibility of CAPTCHA mechanisms, as detailed in this [thorough report by the Accessible Platform Architectures Working Group](https://www.w3.org/TR/turingtest/), but in short, CAPTCHAs provide major blockers to users with cognitive disabilities or sensory issues. Remembering an audio CAPTCHA string can be tricky and frustrating if the user needs to toggle back and forth between an input and a play button. Image and text CAPTCHAs are intentionally made to be difficult to read.

With Artificial Intelligence (AI) gaining traction, there is no question in my mind that there are malicious actors actively training AI to be able to solve CAPTCHA challenges. We maybe looking at a future where AI will be able discern CAPTCHA content much better than most humans, so we need to be looking at alternative solutions that aren’t based on people’s ability to discern and perceive.

## Two-Factor Authentication (2FA)

Though they tend to be better than CAPTCHAs, Two-Factor Authentication (henceforth abbreviated to 2FA) solutions often pose different types of challenges to disabled users. There are various ways in which 2FA typically works, but the most common format by far, with over [90% of sites using this method](https://cyberscoop.com/two-factor-authentication-duo-security-yubikey/) is SMS, where a code is sent to you via text message and you need to enter that same code on the website or application. Email is also common, with specialized authenticator apps coming a distant third. These solutions do pose a similar challenge to voice dictation users as mentioned above, although the risk is somewhat mitigated due to the one-time nature of these temporary passwords.

2FA solutions almost always have a strict timeout, with some being as short as 20 seconds. Asking users to memorize arbitrary strings can pose a challenge for users with cognitive disabilities, and the short time limits are often frustrating to all users. I’ve yet to see a 2FA solution that allows the user to extend the the time as required by the [2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html). Having an option to generate a new code may not be a sufficient replacement as the time window may be so short that a disabled user can never complete it within the allotted time.

<div class="post-callout">
  <p>This is the process for me to pay myself from my business bank account using my computer. Unfortunately, due to needing developer and accessibility tools on my phone, it does not allow me to use the 'streamlined' process, but gives me a horrendous 2FA filled nightmare.</p>
  <ol>
    <li>Log in to my bank account on my desktop with a password manager.</li>
    <li>Authenticate the login by using the phone app to generate an 8 digit code, which I enter on my computer</li>
    <li>Type in the transaction details.</li>
    <li>Get a code via SMS.</li>
    <li>Enter a PIN number to unlock the phone app.</li>
    <li>Enter the SMS code into the transaction approval screen on the phone app.</li>
    <li>Get a response code from the phone app, which I now type into the desktop transaction approval screen.</li>
    <li>Contemplate if this whole internet business is really worth the hassle of not having to talk to a human person.</li>
  </ol>
</div>

The fact that these 2FA solutions often require the use of multiple devices can be problematic. If a blind user is using a computer and needs to also use a mobile device to receive an SMS, they may need to switch their headphones over to the mobile device in order to listen to the code. Furthermore, some assistive technology setups are so specific that users may be limited to a specific device, such as certain kinds of Braille displays that may only work with one primary device.

### Physical security keys

Though physical security keys are the least popular method for 2FA, they can be very beneficial for accessibility. Instead of requiring users to memorize or input arbitrary strings, physical security keys work by allowing the user to push a button on the key itself. The [National Federation of the Blind has written a generally positive review](https://nfb.org/blog/physical-keys-your-digital-life-review-yubico-and-google-security-keys) of the technology, but it does note that there are some existing accessibility issues that may range from “somewhat annoying to showstopping”.

With these devices, accessibility depends on a third-party, whose applications are not under your control. While these apps may generally be accessible, it is not unheard of for regressions to occur, even in applications by major companies.

Another drawback to this form of 2FA is the upfront cost. Although the cheapest keys, found for \$20 USD, may not break the bank for people in countries with a high purchasing power, this cost can be fairly exorbitant for some, and it feels unjust to shunt disabled users into buying an something extra to make up for the pitfalls of an ableist system.

### Biometrics

One final form of 2FA is tied to a users’ biometrics. In these implementations, the application relies on the device’s built-in ability to collect biometric verification in order to confirm a user's identity. If you choose to utilize this form of 2FA, be lenient in what forms you accept. Fingerprints or facial recognition may be easier for users who can’t remember an arbitrary string, but they can be frustrating for users who are missing limbs, who have mobility issues, or have a facial appearance that is regarded as ‘non-standard’. Anyone who has had had the experience of trying to have a video call with an elderly relative who struggles to get their whole face into the frame will understand that some things that are perceived as trivial to some are very difficult for others, depending on their ability level.

There is no universally perfect method for 2FA. The best thing that you as an application developer can do is allow for the user to choose their method of 2FA so that they can choose a method that works for them.

## Blocking keyboard events

I had a enlightening conversation with a blind developer who banks at First Foundation Bank. They informed me that the bank’s web app directly interferes with or obfuscates the output of a keyboard, making them unable to use a screen reader at all with the application. Even though this user is an expert screen reader user and a web developer, they have call in to complete any banking services.

From the outside, it's hard to know why First Foundation Bank implemented such a feature, but it could be possible that the bank thinks that preventing all keystrokes outside of designated inputs would prevent them from certain kinds of bad actors and security issues. It could also be the inadvertent result of a poorly crafted application that has not undergone screen-reader testing. Setting something like [`role="application"`](https://www.a11yproject.com/posts/how-to-use-application-role/) or `aria-hidden="true"` can easily cause an application to be completely broken or hidden for screen reader users. Either way, be careful about making drastic application-wide overrides of keyboard behavior.

## Lack of feature parity between desktop and mobile apps

(This point is less about security, and more typically about teams trying to reduce complexity across different digital products, but I thought it was worth mentioning anyway.)

I recently received an email from HSBC noting that they were discontinuing services from the web application, and moving them exclusively to the mobile application. The discontinued features included key services such as setting an overseas ATM limit, activating a credit card, and settings for quick transfer limits. As mentioned previously, some kinds of disabilities require specific assistive technologies, and it’s not always possible for users to switch devices with ease. If at all possible, it’s always better to make sure key features are available on as many platforms as possible.

## Conclusion

For many disabled people, the internet is a vital way to stay connected and retain some measure of independence and autonomy. Banking applications have an extra responsibility to ensure their their services are accessible as possible and to think through new security measures extra carefully before implementation. If you absolutely need to make a process more difficult due to security reasons, provide multiple pathways for a user to complete the task.
