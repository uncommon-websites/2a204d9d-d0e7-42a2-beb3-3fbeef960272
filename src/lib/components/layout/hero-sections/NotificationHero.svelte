<!--
@component NotificationHero

This component displays a hero section with a centered notification component that loops through alignment alerts.
Shows real-time organizational insights that Sentra would detect.
-->

<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import Button from "$lib/components/ui/Button.svelte";

	// Constants
	import { cta } from "$lib/navigation";
	import { onMount } from "svelte";

	// Types
	type Props = {
		title: string;
		subtitle: string;
		callsToAction?: Array<{
			href: string;
			label: string;
		}>;
	};

	let {
		title,
		subtitle,
		callsToAction = [cta],
		...rest
	}: Props = $props();

	// Notification data
	const notifications = [
		{ emoji: "🎯", title: "Goal drift detected", time: "3m ago", description: "Ops team priorities misaligned with OKRs for Q2" },
		{ emoji: "😶‍🌫️", title: "Silent resignation detected", time: "Just now", description: "Ashley hasn't updated progress or attended standups in 9 days" },
		{ emoji: "🧃", title: "VP still thinks launch is next week", time: "Now", description: "Jane shared outdated go-live timeline in all-hands" },
		{ emoji: "🚫", title: "Jamie facing blocker", time: "1m ago", description: "PR #4: Authentication flow needs review by senior" },
		{ emoji: "💰", title: "Sarah waiting on approvals", time: "3d ago", description: "Budget increase for cloud resources" },
		{ emoji: "♻️", title: "Redundant work in progress", time: "15m ago", description: "Two teams implementing the same user settings flow separately" },
		{ emoji: "📉", title: "Team velocity dropping", time: "15m ago", description: "Frontend team missed sprint goals 2x in a row" },
		{ emoji: "📝", title: "Project cancelled memo missed", time: "1h ago", description: "John still working on the old marketing campaign" }
	];

	let currentNotificationIndex = $state(0);

	onMount(() => {
		const interval = setInterval(() => {
			currentNotificationIndex = (currentNotificationIndex + 1) % notifications.length;
		}, 3000); // Change every 3 seconds

		return () => clearInterval(interval);
	});

	let currentNotification = $derived(notifications[currentNotificationIndex]);
	
	// Create visible notifications for stacking effect (current + next 2)
	let visibleNotifications = $derived(() => {
		const visible = [];
		for (let i = 0; i < 3; i++) {
			visible.push((currentNotificationIndex + i) % notifications.length);
		}
		return visible;
	});
</script>

<div class="bg-background grid h-[calc(100vh-var(--nav-height))] grid-rows-[1fr_auto]" {...rest}>
	<div class="relative isolate flex items-center justify-center">
		<header
			class="section-px container mx-auto grid place-items-center text-center text-balance"
			data-enter-container
		>
			<div class="grid max-w-prose place-items-center justify-center gap-8 lg:max-w-[80ch]">
				<h1 class="text-display w-full text-balance lg:!text-7xl" data-enter>
					<span class="block"><AnimateText text={title} /></span>
				</h1>

				<p
					data-enter
					class="text-headline text-muted-foreground block max-w-[45ch] text-pretty opacity-80 transition duration-500 ease-out"
				>
					{subtitle}
				</p>

				<!-- Stacked Notification Components -->
				<div class="relative mx-auto w-full max-w-md h-32" data-enter>
					{#each visibleNotifications as notificationIndex, stackIndex}
						{@const notification = notifications[notificationIndex]}
						{@const isTop = stackIndex === 0}
						<div 
							class="notification-card bg-card border-border absolute w-full rounded-xl border p-6 shadow-lg transition-all duration-500 ease-out"
							style:transform="translateY({stackIndex * 12}px) scale({1 - stackIndex * 0.08})"
							style:z-index={10 - stackIndex}
							style:opacity={isTop ? 1 : 0.6 - stackIndex * 0.2}
						>
							<div class="flex items-start gap-3">
								<div class="text-2xl" role="img" aria-label="Alert icon">
									{notification.emoji}
								</div>
								<div class="flex-1 space-y-1">
									<div class="flex items-center justify-between">
										<h3 class="text-foreground text-sm font-medium">
											{notification.title}
										</h3>
										<span class="text-muted-foreground text-xs">
											{notification.time}
										</span>
									</div>
									<p class="text-muted-foreground text-sm leading-relaxed">
										{notification.description}
									</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			{#if callsToAction.length > 0}
				<div class="mt-8 flex gap-4" data-enter>
					{#each callsToAction as cta, index}
						<Button href={cta.href} size="lg" variant={index % 2 === 0 ? "primary" : "secondary"} class="max-lg:hidden"
							>{cta.label}</Button
						>
						<Button
							href={cta.href}
							size="md"
							variant={index % 2 === 0 ? "primary" : "secondary"}
							class="lg:hidden">{cta.label}</Button
						>
					{/each}
				</div>
			{/if}
		</header>
	</div>
</div>