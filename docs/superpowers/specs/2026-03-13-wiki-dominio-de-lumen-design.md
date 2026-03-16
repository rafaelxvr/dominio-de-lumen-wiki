# Spec: Wiki Domínio de Lúmen — Estrutura Inicial

**Data:** 2026-03-13
**Status:** Aprovado
**Abordagem:** Híbrida (Enciclopédica + Voz Narrativa)

---

## Contexto

Wiki para jogadores de campanha TTRPG (Daggerheart) ambientada no cenário dark fantasy "Domínio de Lúmen". Construída com Docusaurus 3.9 (TypeScript, React 19). Todo conteúdo em pt-BR.

**Público:** jogadores da campanha.
**Propósito:** consulta sobre cenário, NPCs encontrados, facções conhecidas, locais visitados e lore público.
**Restrição crítica:** nenhum segredo do plot, motivações ocultas, ou informações não reveladas em jogo.

---

## 1. Configuração do Site

### docusaurus.config.ts

| Campo | Valor |
|-------|-------|
| title | `Domínio de Lúmen` |
| tagline | `O mundo não morreu. Apenas parou de respirar.` |
| colorMode.defaultMode | `dark` |
| docs.routeBasePath | `wiki` |
| blog.blogTitle | `Diário de Campanha` |
| blog.blogDescription | `Registros das sessões no Domínio de Lúmen` |

### Navbar (4 itens)

1. **O Mundo** → `wiki/o-mundo/dominio-de-lumen`
2. **Locais** → `wiki/locais/encruzilhada`
3. **Facções & NPCs** → `wiki/faccoes/a-marcha`
4. **Diário de Campanha** → `/blog`

### Footer

Linha simples: "Campanha Domínio de Lúmen — Sistema Daggerheart"

---

## 2. Tema Visual

### Paleta de Cores

| Variável | Light Mode | Dark Mode |
|----------|-----------|-----------|
| Primary | `#b8860b` | `#d4a017` |
| Background | `#1a1a1a` | `#0d0d0d` |
| Text | `#e0d6c8` | `#e8ddd0` |
| Secondary | `#4a4a4a` | `#3a3a3a` |
| Accent | `#8b0000` | `#a02020` |

Dark mode é o modo padrão e primário. Estilo minimalista, sem ilustrações iniciais.

---

## 3. Estrutura de Conteúdo (`docs/`)

```
docs/
├── intro.md                          # "Bem-vindos ao Domínio de Lúmen"
├── o-mundo/
│   ├── _category_.json               # label: "O Mundo", position: 1
│   ├── dominio-de-lumen.md           # Visão geral do mundo
│   ├── a-apostasia.md                # O cataclismo
│   ├── a-umbra.md                    # A ameaça existencial
│   ├── as-piras-sagradas.md          # Sistema de proteção
│   └── tempestades-umbrais.md        # Fenômeno natural
├── locais/
│   ├── _category_.json               # label: "Locais", position: 2
│   ├── encruzilhada.md               # Detalhado (visitado)
│   ├── sino.md                       # Detalhado (visitado)
│   ├── ponte-das-correntes.md        # Detalhado (atravessado)
│   ├── veu.md                        # Breve (não visitado)
│   ├── urna.md                       # Breve (não visitado)
│   ├── trono-de-deus.md              # Breve (não visitado)
│   └── pavio.md                      # Breve (não visitado)
├── faccoes/
│   ├── _category_.json               # label: "Facções", position: 3
│   ├── a-marcha.md
│   ├── o-sindicato.md
│   ├── guardioes-da-pira.md
│   ├── os-costuradores.md            # Apenas o que PCs sabem
│   └── rainhas-de-damask.md
├── npcs/
│   ├── _category_.json               # label: "Personagens", position: 4
│   ├── encruzilhada/
│   │   ├── _category_.json           # label: "Encruzilhada"
│   │   ├── imir-dos-cais.md
│   │   ├── celestine-versari.md
│   │   ├── hadrian-alquamar.md
│   │   ├── theron-alquamar.md
│   │   ├── mestre-corvinus.md
│   │   └── ama-selene.md
│   ├── ponte-das-correntes/
│   │   ├── _category_.json           # label: "Ponte das Correntes"
│   │   ├── sevra-kael.md
│   │   └── gael.md
│   └── sino/
│       ├── _category_.json           # label: "Sino"
│       └── irma-valkara.md
└── ameacas/
    ├── _category_.json               # label: "Ameaças", position: 5
    ├── criaturas-umbrais.md
    └── praga-da-alma.md
```

**Total: ~30 arquivos markdown + 10 _category_.json**

---

## 4. Formato das Páginas

### Lore / Locais / Facções / Ameaças

```markdown
---
sidebar_position: N
---

# Título

> *Epígrafe in-world — frase evocativa, sombria, dramática.*

Texto introdutório (2-3 parágrafos).

## Seções objetivas
Tabelas, listas, descrições sensoriais quando aplicável.

## Conexões
Links para páginas relacionadas.
```

### NPCs

```markdown
---
sidebar_position: N
---

# Nome do NPC

> *Descrição sensorial curta.*

| Atributo | Valor |
|----------|-------|
| **Localização** | ... |
| **Papel** | ... |
| **Primeira Impressão** | ... |

Parágrafo com o que os jogadores sabem.

## Conexões
Links para locais/facções/outros NPCs.
```

### Regras de conteúdo por tipo de local

- **Visitados (Encruzilhada, Sino, Ponte):** descrição sensorial, distritos/áreas, atmosfera, comércio, tensões visíveis, NPCs encontrados. Sem revelar conspirações.
- **Não visitados (Véu, Urna, Trono de Deus, Pavio):** 2-3 parágrafos. O que se ouve por rumores. Sem detalhes internos.

### NPCs mortos/menores

Korvald, Mordomo, Ser Aldric, Drenn, Vigário, Fios Vivos — não ganham página. Aparecem nos recaps de sessão ou mencionados nas páginas de locais.

---

## 5. Blog — Diário de Campanha

- Remover todos os posts placeholder do Docusaurus.
- `authors.yml`: autor "Narrador" (o DM).
- `tags.yml`: tags como `sessão`, `encruzilhada`, `sino`, `combate`, `exploração`.
- Posts criados pelo DM conforme as sessões acontecem. Sem posts iniciais.
- Tom: narrativo mas acessível. Eventos-chave, NPCs, decisões, consequências visíveis.
- **Nunca incluir:** consequências ocultas, avanços de relógios do DM, planos de facções.

---

## 6. Homepage (`src/pages/index.tsx`)

- Hero section: título "Domínio de Lúmen" + tagline
- 4 cards de navegação: O Mundo, Locais, Facções & NPCs, Diário de Campanha
- Estilo minimalista, dark, sem ilustrações
- Componente `HomepageFeatures` substituído por novo componente de cards de navegação

---

## 7. Limpeza do Scaffold

Remover conteúdo placeholder:
- `docs/tutorial-basics/` (pasta inteira)
- `docs/tutorial-extras/` (pasta inteira)
- `docs/intro.md` (substituir por introdução do wiki)
- `blog/` (todos os posts de exemplo)
- `src/components/HomepageFeatures/` (substituir)
- `src/pages/markdown-page.md` (remover)
- `static/img/` (SVGs do Docusaurus — manter favicon por agora)

---

## 8. Fora do Escopo (Não Fazer)

- Não criar páginas de PCs (jogadores).
- Não incluir mecânicas de jogo (regras do Daggerheart).
- Não adicionar assets visuais (logo, imagens, mapas) — o DM pode adicionar depois.
- Não configurar deploy (GitHub Pages, Vercel, etc.) — decisão futura.
- Não inicializar Git — o DM decide quando.
