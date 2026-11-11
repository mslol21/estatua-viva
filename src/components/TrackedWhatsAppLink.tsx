'use client';
import type { ReactNode, MouseEvent } from 'react';
import { trackLeadAndOpenWhatsApp } from '@/lib/tracking';
export default function TrackedWhatsAppLink({ message, label, children, className }: { message: string; label: string; children: ReactNode; className?: string }) {
  return <a href={\`https://wa.me/5511937765250?text=\${encodeURIComponent(message)}\`} target="_blank" rel="noopener noreferrer" className={className} onClick={(event: MouseEvent<HTMLAnchorElement>) => { event.preventDefault(); trackLeadAndOpenWhatsApp({ message, leadSource: 'service_page', leadLabel: label, eventCategory: 'Service_Lead' }); }}>{children}</a>;
}
