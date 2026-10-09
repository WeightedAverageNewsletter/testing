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
- Keep sample editions explicitly illustrative and plan selection frontend-only until an actual subscription service is connected; never imply a payment or subscription succeeded.
