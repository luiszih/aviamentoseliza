-- Remove public read access to leads (contains PII)
DROP POLICY IF EXISTS "Anyone can view leads" ON public.leads;

-- Revoke SELECT from anon and authenticated so leads are not exposed via PostgREST/GraphQL
REVOKE SELECT ON public.leads FROM anon;
REVOKE SELECT ON public.leads FROM authenticated;

-- Keep INSERT allowed for the public form (policy "Anyone can insert leads" remains)
-- Service role retains full access for admin/backend reads.
GRANT ALL ON public.leads TO service_role;