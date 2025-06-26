<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import NotificationHero from "$lib/components/layout/hero-sections/NotificationHero.svelte";
</script>

<NotificationHero
	title="Keep every team on the same page"
	subtitle="Sentra shows you where alignment is slipping—so you can fix it before it costs you time, morale, or money."
/>
<LogoScroller 
	label="Trusted by growing organizations"
	logoUrls={[
		'https://logo.clearbit.com/stripe.com',
		'https://logo.clearbit.com/notion.so',
		'https://logo.clearbit.com/slack.com',
		'https://logo.clearbit.com/zoom.us'
	]}
/>

<Summary
	title="What we do"
	text="Sentra is an AI teammate that continuously enhances organizational alignment by proactively identifying communication breakdowns before they impact productivity, morale, or finances. We help growing Series A+ companies keep every team on the same page through natural voice interactions and intelligent monitoring of organizational health."
/>

<Testimonials
	testimonials={[
		{
			name: "Safiya Green",
			position: "CTO",
			company: "Zentrolytics",
			quote:
				"Sentra flagged a misaligned initiative before we hired the wrong team. That single insight saved us months and nearly $200,000.",
			image:
				"/generated/image-a-professional-black-woman-executive-in-.webp"
		},
		{
			name: "Jarek Molina",
			position: "VP Operations",
			company: "Fusebeam",
			quote:
				"We've cut 9 hours of recurring meetings per week since implementing Sentra. It has more context than any one of us and shows up every time.",
			image:
				"/generated/image-a-professional-latino-man-in-a-leadershi.webp"
		},
		{
			name: "Emilie Takano",
			position: "Head of Strategy",
			company: "Dovetail Core",
			quote:
				"Sentra picked up on overlaps between product and sales that were quietly derailing both teams. Catching it early changed our quarter.",
			image:
				"/generated/image-a-professional-asian-woman-executive-in-.webp"
		}
	]}
/>

<Features
	title="Features designed for clarity, not surveillance"
	subtitle="The first AI teammate that keeps your entire organization in sync, without added complexity"
	features={[
		{
			title: "System-wide awareness through trusted conversations",
			description: "Sentra talks directly with individuals across the company, gathering insights you'd never catch in a dashboard. That means real visibility into how teams are doing—and where support is needed—without performance tracking or micromanagement."
		},
		{
			title: "Early alerts before misalignment turns into rework",
			description: "Sentra spots tension, duplicated effort, or team drift before they lead to churned code, abandoned features, or low morale. Leaders gain the chance to act early instead of reacting late."
		},
		{
			title: "AI that's trustworthy by design",
			description: "Built on a strict trust-first model, Sentra never monitors, logs keystrokes, or spies on productivity. Participation is always consent-based, data is aggregated, and patterns are surfaced to fix systems—not to single people out."
		},
		{
			title: "Works with the tools your team already uses",
			description: "Sentra integrates with systems like Slack, Jira, and Calendar to understand work as it happens. This context powers more accurate insights and ensures Sentra works as an extension of your current workflows—not a replacement."
		},
		{
			title: "A living map of how your org really functions",
			description: "Through ongoing conversations and consent-based integrations, Sentra maintains a dynamic, real-time snapshot of how people, teams, and goals connect. It's like having a second brain that understands company structure as it evolves."
		},
		{
			title: "Multi-agent intelligence for complex team environments",
			description: "Sentra doesn't rely on simple sentiment scores. It uses advanced models to triangulate issues accurately and tell you who's affected, what's causing friction, and where to focus—no guesswork required."
		}
	]}
/>

<UseCases
	title="Use Cases"
	subtitle="Real-world applications for preventing misalignment"
	useCases={[
		{
			title: "Catch cross-team conflicts before they spiral",
			description: "When engineering builds features that sales never asked for, or product roadmaps shift without notifying design, Sentra spots the disconnect early. Leaders get alerts to realign teams before wasted work piles up.",
			image: "/generated/image-a-group-of-executives-gathered-around-a-.webp",
			link: {
				href: "/use-cases/cross-team-alignment",
				label: "Learn more"
			}
		},
		{
			title: "Scale team coordination without more meetings",
			description: "Growing from 50 to 150+ people breaks informal communication. Sentra maintains awareness across expanding teams by talking to everyone regularly, surfacing patterns that would otherwise get lost in the growth.",
			image: "/generated/image-engineering-team-members-collaborating-e.webp",
			link: {
				href: "/use-cases/scaling-coordination",
				label: "Learn more"
			}
		},
		{
			title: "Prevent strategy execution gaps",
			description: "When leadership sets new priorities but teams continue old work, months pass before anyone notices. Sentra tracks how strategic shifts flow through the organization and flags when execution isn't matching intent.",
			image: "/generated/image-a-diverse-leadership-team-gathered-aroun.webp",
			link: {
				href: "/use-cases/strategy-execution",
				label: "Learn more"
			}
		}
	]}
/>

<AboutTeaser />
<CallToAction
	title="Keep your company in sync. Automatically."
	subtitle="Join the private beta"
	description="Sentra is an AI teammate that talks to everyone, spots misalignment early, and alerts the right people before important things start to break."
	imageSrc="/generated/image-a-cheerful-engineering-manager-dressed-i.webp"
	callsToAction={[
		{
			href: "/contact",
			label: "Request early access",
			variant: "primary"
		}
	]}
/>
