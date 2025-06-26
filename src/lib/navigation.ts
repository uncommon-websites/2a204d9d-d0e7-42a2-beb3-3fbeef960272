/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "Cross-team alignment",
				href: "/use-cases/cross-team-alignment",
				image: "/generated/image-a-group-of-executives-gathered-around-a-.webp",
				description:
					"Catch cross-team conflicts before they spiral. When engineering builds features that sales never asked for, or product roadmaps shift without notifying design, Sentra spots the disconnect early and alerts leaders to realign teams before wasted work piles up.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Scaling coordination",
				href: "/use-cases/scaling-coordination",
				image: "/generated/image-engineering-team-members-collaborating-e.webp",
				description:
					"Scale team coordination without more meetings. Growing from 50 to 150+ people breaks informal communication. Sentra maintains awareness across expanding teams by talking to everyone regularly, surfacing patterns that would otherwise get lost in the growth.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Strategy execution",
				href: "/use-cases/strategy-execution",
				image: "/generated/image-a-diverse-leadership-team-gathered-aroun.webp",
				description:
					"Prevent strategy execution gaps. When leadership sets new priorities but teams continue old work, months pass before anyone notices. Sentra tracks how strategic shifts flow through the organization and flags when execution isn't matching intent.",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
