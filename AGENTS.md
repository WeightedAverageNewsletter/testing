<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep newsletter offerings in `src/lib/newsletters.ts` and test their prices there so displayed plan details share one source of truth.
- Keep landing-page appearance in the semantic design system in `src/styles.css` and use editorial Button variants for calls to action.
- Sample editions in `src/lib/samples.ts` are real past issues, labelled "From the archive" with their date. Keep production-only parts (suggested tweets, section labels, verification notes) out of them.
- Payment happens on Zoho Billing's hosted checkout; never imply on the site that a payment or subscription succeeded.
