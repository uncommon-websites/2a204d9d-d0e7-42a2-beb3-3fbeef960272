<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
		{
			title: "Trust first",
			description: "We build AI that respects humans, protects autonomy, and never surveils employees."
		},
		{
			title: "Human-centric design",
			description: "Technology should feel natural and enhance human connection, not replace it."
		},
		{
			title: "Proactive alignment",
			description: "We prevent misalignment before it becomes costly, focusing on systems over symptoms."
		}
	];
</script>

<SecondaryHero
	title="Building trust through alignment"
	subtitle="AI that brings teams together, not apart"
	imageSrc="/generated/image-a-diverse-team-of-professionals-engaged-.webp"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"Sentra started with a simple question: why do organizations that hire the best people and use the best tools still fall out of alignment? The more we spoke to teams—from fast-growing startups to well-established mid-size companies—the clearer it became. As companies scale, alignment breaks. Teams move quickly, but decisions get lost, context slips, and problems linger because no one sees the full picture. You're building fast, but not always together.",
		"We soon realized the usual fixes weren't really fixes at all. More dashboards, more standups, more Slack threads—these only add noise. They turn communication into performance art and bury signals beneath reporting rituals. Every new tool becomes one more place to miss something important. The root problem isn't people—it's the system. When your organization outgrows the human capacity to track context and subtle cues, breakdowns are inevitable.",
		"So we built Sentra—a trust-first AI teammate designed to keep teams connected in real time. Sentra talks with people across the company to surface weak signals early and guide small but critical interventions. It does this through natural conversations and familiar tools—not surveillance or clunky status updates. Alignment shouldn't require more meetings. It should just happen. And now, it can."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
	stakeholderType="team"
	title="Our team."
	subtitle="Building the future of organizational intelligence."
	stakeholders={[
		{
			name: "Alex Morgan",
			position: "Founder & CEO",
			bio: "Passionate about creating AI that strengthens human connection and organizational trust.",
			image:
				"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
		},
		{
			name: "Jamie Chen",
			position: "Head of AI Experience",
			bio: "Designing conversational AI that feels human and builds trust through every interaction.",
			image:
				"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
		},
		{
			name: "Taylor Wright",
			position: "Chief Technology Officer",
			bio: "Building autonomous systems that understand organizations and prevent misalignment at scale.",
			image:
				"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
		}
	]}
/>

<StakeholderGrid
	stakeholderType="investor"
	title="Backed by the best."
	subtitle="Leading investors in AI and future of work"
	stakeholders={[
		{
			name: "Andreessen Horowitz",
			image: "https://cdn.brandfetch.io/a16z.com/w/400/h/400/logo"
		},
		{
			name: "Greylock Partners",
			image: "https://cdn.brandfetch.io/greylock.com/w/400/h/400/logo"
		},
		{
			name: "First Round Capital",
			image: "https://cdn.brandfetch.io/firstround.com/w/400/h/400/logo"
		}
	]}
/>

<!-- CTA Section -->
<CallToAction
	title="Ready to transform alignment?"
	subtitle="Join our private beta"
	description="Experience how Sentra helps Series A+ organizations reduce meeting time, prevent miscommunication, and build trust across teams."
/>
