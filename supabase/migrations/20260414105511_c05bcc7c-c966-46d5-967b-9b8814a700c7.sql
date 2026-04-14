
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  empresa TEXT NOT NULL,
  cargo TEXT,
  email TEXT,
  telefone TEXT NOT NULL,
  cidade TEXT,
  estado TEXT,
  segmento TEXT,
  interesse TEXT[],
  quantidade TEXT,
  prazo TEXT,
  observacoes TEXT,
  evento TEXT DEFAULT 'Brasil Promotion Day',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Anyone can view leads"
ON public.leads
FOR SELECT
TO anon, authenticated
USING (true);
