# Review notes

## Lesson learned: change stream side effects need a recovery path

The order and user change stream handlers use `Promise.allSettled` and log rejected cleanup actions, but they do not retry them or save failed work for later. If inventory restoration, payment cancellation, or related-record deletion fails after the source document has been deleted, the event may be gone while the cleanup remains incomplete.

For change stream work that must be reliable, logging an error is not enough. Make handlers idempotent and persist failed tasks for retry (or use another durable recovery mechanism). Treat each side effect as independently fallible, and make it possible to resume cleanup after a process restart.

## Review context

- Order pre/post images are enabled in the target database; the enablement script has been run.
- Exiting the process on a change stream error is intentional for this demo app.
