# Wiki Domínio de Lúmen — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the default Docusaurus scaffold into a dark fantasy wiki for players of the "Domínio de Lúmen" TTRPG campaign, with world lore, locations, factions, NPCs, and a session recap blog.

**Architecture:** Docusaurus 3.9 static site with auto-generated sidebar from `docs/` folder structure. Content in Markdown (pt-BR). Blog for session recaps. Dark fantasy theme via Infima CSS overrides. Route base changed from `/docs/` to `/wiki/`.

**Tech Stack:** Docusaurus 3.9, TypeScript, React 19, Infima CSS, MDX

**Spec:** `docs/superpowers/specs/2026-03-13-wiki-dominio-de-lumen-design.md`
**Campaign Source:** `C:\Users\Rafael Xavier\OneDrive\kravir` (Obsidian vault — read-only reference)

**Content Restriction (CRITICAL):** Never include DM secrets, hidden NPC motivations, unrevealed plot points, or information players haven't discovered in-game. When in doubt, omit. Refer to `CLAUDE.md` for the full list of NPCs encountered and locations visited.

---

## Chunk 1: Scaffold Cleanup & Site Configuration

### Task 1: Clean up placeholder content

**Files:**
- Delete: `docs/tutorial-basics/` (entire folder)
- Delete: `docs/tutorial-extras/` (entire folder)
- Delete: `docs/intro.md`
- Delete: `blog/2019-05-28-first-blog-post.md`
- Delete: `blog/2019-05-29-long-blog-post.md`
- Delete: `blog/2021-08-01-mdx-blog-post.mdx`
- Delete: `blog/2021-08-26-welcome/` (entire folder)
- Delete: `src/pages/markdown-page.md`
- Delete: `static/img/undraw_docusaurus_mountain.svg`
- Delete: `static/img/undraw_docusaurus_tree.svg`
- Delete: `static/img/undraw_docusaurus_react.svg`
- Delete: `static/img/docusaurus.png`
- Delete: `static/img/docusaurus-social-card.jpg`

- [ ] **Step 1: Delete tutorial docs**

```bash
rm -rf docs/tutorial-basics docs/tutorial-extras docs/intro.md
```

- [ ] **Step 2: Delete blog placeholder posts**

```bash
rm -f blog/2019-05-28-first-blog-post.md blog/2019-05-29-long-blog-post.md blog/2021-08-01-mdx-blog-post.mdx
rm -rf blog/2021-08-26-welcome
```

- [ ] **Step 3: Delete extra pages and unused static assets**

```bash
rm -f src/pages/markdown-page.md
rm -f static/img/undraw_docusaurus_mountain.svg static/img/undraw_docusaurus_tree.svg static/img/undraw_docusaurus_react.svg
rm -f static/img/docusaurus.png static/img/docusaurus-social-card.jpg
```

---

### Task 2: Configure docusaurus.config.ts

**Files:**
- Modify: `docusaurus.config.ts`

- [ ] **Step 1: Update site metadata**

Replace lines 8-9:
```typescript
  title: 'Domínio de Lúmen',
  tagline: 'O mundo não morreu. Apenas parou de respirar.',
```

- [ ] **Step 2: Update i18n to pt-BR**

Replace lines 33-36:
```typescript
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
```

- [ ] **Step 3: Configure docs routeBasePath and remove editUrl**

Replace the `docs` block (lines 42-48):
```typescript
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'wiki',
        },
```

- [ ] **Step 4: Configure blog and remove editUrl**

Replace the `blog` block (lines 49-63):
```typescript
        blog: {
          showReadingTime: true,
          blogTitle: 'Diário de Campanha',
          blogDescription: 'Registros das sessões no Domínio de Lúmen',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
```

- [ ] **Step 5: Update themeConfig — remove social card, set dark mode default**

Replace lines 71-76:
```typescript
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
```

- [ ] **Step 6: Update navbar**

Replace the entire `navbar` block (lines 77-97):
```typescript
    navbar: {
      title: 'Domínio de Lúmen',
      items: [
        {
          to: '/wiki/o-mundo/dominio-de-lumen',
          label: 'O Mundo',
          position: 'left',
        },
        {
          to: '/wiki/locais/encruzilhada',
          label: 'Locais',
          position: 'left',
        },
        {
          to: '/wiki/faccoes/a-marcha',
          label: 'Facções & NPCs',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Diário de Campanha',
          position: 'left',
        },
      ],
    },
```

- [ ] **Step 7: Update footer**

Replace the entire `footer` block (lines 98-141):
```typescript
    footer: {
      style: 'dark',
      copyright: 'Campanha Domínio de Lúmen — Sistema Daggerheart',
    },
```

- [ ] **Step 8: Remove organizationName and projectName placeholders**

Delete lines 25-26:
```typescript
  organizationName: 'facebook',
  projectName: 'docusaurus',
```

---

### Task 3: Update sidebars.ts

**Files:**
- Modify: `sidebars.ts`

- [ ] **Step 1: Rename sidebar and clean up**

Replace the entire sidebars object content with:
```typescript
const sidebars: SidebarsConfig = {
  wikiSidebar: [{type: 'autogenerated', dirName: '.'}],
};
```

Remove all comments.

---

### Task 4: Update CSS theme

**Files:**
- Modify: `src/css/custom.css`

- [ ] **Step 1: Replace entire file with dark fantasy palette**

```css
:root {
  --ifm-color-primary: #b8860b;
  --ifm-color-primary-dark: #a57a0a;
  --ifm-color-primary-darker: #9c7309;
  --ifm-color-primary-darkest: #805f08;
  --ifm-color-primary-light: #cb940c;
  --ifm-color-primary-lighter: #d49d0d;
  --ifm-color-primary-lightest: #e8b230;
  --ifm-background-color: #1a1a1a;
  --ifm-font-color-base: #e0d6c8;
  --ifm-code-font-size: 95%;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
}

[data-theme='dark'] {
  --ifm-color-primary: #d4a017;
  --ifm-color-primary-dark: #bf9015;
  --ifm-color-primary-darker: #b48814;
  --ifm-color-primary-darkest: #947010;
  --ifm-color-primary-light: #e0ad2a;
  --ifm-color-primary-lighter: #e3b33a;
  --ifm-color-primary-lightest: #eac464;
  --ifm-background-color: #0d0d0d;
  --ifm-font-color-base: #e8ddd0;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
}

/* Blockquote styling for in-world epigraphs */
blockquote {
  border-left-color: var(--ifm-color-primary);
  font-style: italic;
  opacity: 0.9;
}

/* Navbar dark styling */
.navbar {
  background-color: #111111;
  border-bottom: 1px solid #2a2a2a;
}

[data-theme='dark'] .navbar {
  background-color: #0a0a0a;
  border-bottom: 1px solid #1a1a1a;
}

/* Secondary and accent colors */
:root {
  --ifm-color-secondary: #4a4a4a;
  --ifm-color-danger: #8b0000;
}

[data-theme='dark'] {
  --ifm-color-secondary: #3a3a3a;
  --ifm-color-danger: #a02020;
}

/* Footer */
.footer--dark {
  background-color: #0a0a0a;
}
```

---

### Task 5: Build verification — scaffold cleanup

- [ ] **Step 1: Create minimal intro.md so the build has at least one doc**

Create `docs/intro.md`:
```markdown
---
sidebar_position: 0
slug: /
---

# Domínio de Lúmen

> *"O mundo não morreu. Apenas parou de respirar."*

Bem-vindos ao compêndio do Domínio de Lúmen.
```

- [ ] **Step 2: Run build and verify no errors**

```bash
cd "C:\Users\Rafael Xavier\OneDrive\dominio-de-lumen-wiki" && npm run build
```

Expected: Build succeeds with no broken link errors.

---

## Chunk 2: Homepage & Navigation Component

### Task 6: Create NavigationCards component

**Files:**
- Create: `src/components/NavigationCards/index.tsx`
- Create: `src/components/NavigationCards/styles.module.css`
- Delete: `src/components/HomepageFeatures/index.tsx`
- Delete: `src/components/HomepageFeatures/styles.module.css`

- [ ] **Step 1: Delete old HomepageFeatures component**

```bash
rm -rf src/components/HomepageFeatures
```

- [ ] **Step 2: Create NavigationCards styles**

Create `src/components/NavigationCards/styles.module.css`:
```css
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 2rem 0;
  max-width: 800px;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }
}

.card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s, background 0.2s;
}

.card:hover {
  border-color: var(--ifm-color-primary);
  background: rgba(255, 255, 255, 0.06);
  text-decoration: none;
  color: inherit;
}

.cardTitle {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--ifm-color-primary);
}

.cardDescription {
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0;
}
```

- [ ] **Step 3: Create NavigationCards component**

Create `src/components/NavigationCards/index.tsx`:
```tsx
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type CardItem = {
  title: string;
  description: string;
  to: string;
};

const cards: CardItem[] = [
  {
    title: 'O Mundo',
    description: 'A Apostasia, a Umbra, as Piras Sagradas e o que restou da civilização.',
    to: '/wiki/o-mundo/dominio-de-lumen',
  },
  {
    title: 'Locais',
    description: 'Cidades, vilas e estradas do Domínio — de Encruzilhada às ruínas de Sino.',
    to: '/wiki/locais/encruzilhada',
  },
  {
    title: 'Facções & NPCs',
    description: 'As organizações que movem o mundo e os rostos que vocês encontraram.',
    to: '/wiki/faccoes/a-marcha',
  },
  {
    title: 'Diário de Campanha',
    description: 'Registros das sessões — o que aconteceu, decisão por decisão.',
    to: '/blog',
  },
];

function Card({title, description, to}: CardItem) {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.cardTitle}>{title}</div>
      <p className={styles.cardDescription}>{description}</p>
    </Link>
  );
}

export default function NavigationCards(): ReactNode {
  return (
    <section className={styles.cards}>
      {cards.map((props, idx) => (
        <Card key={idx} {...props} />
      ))}
    </section>
  );
}
```

---

### Task 7: Update homepage

**Files:**
- Modify: `src/pages/index.tsx`
- Modify: `src/pages/index.module.css`

- [ ] **Step 1: Rewrite index.tsx**

Replace entire file:
```tsx
import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import NavigationCards from '@site/src/components/NavigationCards';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Início"
      description="Compêndio do Domínio de Lúmen — wiki para jogadores">
      <HomepageHeader />
      <main className="container">
        <NavigationCards />
      </main>
    </Layout>
  );
}
```

- [ ] **Step 2: Rewrite index.module.css**

Replace entire file:
```css
.heroBanner {
  padding: 4rem 0 2rem;
  text-align: center;
}

@media screen and (max-width: 996px) {
  .heroBanner {
    padding: 2rem 1rem;
  }
}

.heroTitle {
  font-size: 3rem;
  color: var(--ifm-color-primary);
}

.heroSubtitle {
  font-size: 1.2rem;
  opacity: 0.7;
  font-style: italic;
}
```

- [ ] **Step 3: Build and verify**

```bash
cd "C:\Users\Rafael Xavier\OneDrive\dominio-de-lumen-wiki" && npm run build
```

Expected: Build succeeds. Homepage renders with hero + 4 navigation cards.

---

## Chunk 3: Blog Setup

### Task 8: Configure blog for session recaps

**Files:**
- Modify: `blog/authors.yml`
- Modify: `blog/tags.yml`

- [ ] **Step 1: Replace authors.yml**

```yaml
narrador:
  name: Narrador
  title: Mestre da Campanha
```

- [ ] **Step 2: Replace tags.yml**

```yaml
sessao:
  label: Sessão
  permalink: /sessao
  description: Registros de sessões jogadas

encruzilhada:
  label: Encruzilhada
  permalink: /encruzilhada
  description: Eventos em Encruzilhada

sino:
  label: Sino
  permalink: /sino
  description: Eventos em Sino

combate:
  label: Combate
  permalink: /combate
  description: Sessões com encontros de combate

exploracao:
  label: Exploração
  permalink: /exploracao
  description: Sessões focadas em exploração

politica:
  label: Política
  permalink: /politica
  description: Sessões com intriga política
```

- [ ] **Step 3: Build and verify**

```bash
cd "C:\Users\Rafael Xavier\OneDrive\dominio-de-lumen-wiki" && npm run build
```

Expected: Build succeeds. Blog page at `/blog` renders empty (no posts yet).

---

## Chunk 4: Content — O Mundo (Lore)

### Task 9: Create O Mundo section

**Files:**
- Create: `docs/o-mundo/_category_.json`
- Create: `docs/o-mundo/dominio-de-lumen.md`
- Create: `docs/o-mundo/a-apostasia.md`
- Create: `docs/o-mundo/a-umbra.md`
- Create: `docs/o-mundo/as-piras-sagradas.md`
- Create: `docs/o-mundo/tempestades-umbrais.md`

**Source Reference (read-only):**
- `C:\Users\Rafael Xavier\OneDrive\kravir\Ameaças\Umbra.md`
- `C:\Users\Rafael Xavier\OneDrive\kravir\Ameaças\Tempestades Umbrais.md`
- `C:\Users\Rafael Xavier\OneDrive\kravir\Organizações\Guardiões da Pira e Portadores da Cinza.md`

- [ ] **Step 1: Create _category_.json**

Create `docs/o-mundo/_category_.json`:
```json
{
  "label": "O Mundo",
  "position": 1,
  "link": {
    "type": "generated-index",
    "description": "O cenário do Domínio de Lúmen — um mundo em penumbra eterna."
  }
}
```

- [ ] **Step 2: Create dominio-de-lumen.md**

Read `kravir\Ameaças\Umbra.md` and `kravir\Cidades\Encruzilhada.md` for world context. Write a general overview of the world covering:
- The eternal penumbra (no sun, no stars — only gray twilight)
- Civilization clinging to fortified cities protected by Sacred Pyres
- The ruins of the Old World (Colossi, divine stones, forgotten technology)
- Roads between cities (dangerous, patrolled by the Marcha)
- General tone: isolation, decay, political tension, spiritual uncertainty

Format: epigraph → 2-3 intro paragraphs → sections (O Que Resta, As Cidades, As Estradas, Os Restos Divinos) → Conexões links.

**Content restriction:** Do NOT reveal why the gods fell, what the Senhores do Éter are, or any hidden cosmological truth.

- [ ] **Step 3: Create a-apostasia.md**

Write about the cataclysm that destroyed civilization 300 years ago. Only public knowledge:
- The gods fell (Colossi collapsed, Pedras de Moldura shattered)
- The sun disappeared, replaced by penumbra
- Cities crumbled, millions died
- The Umbra emerged
- Nobody knows why it happened (theories exist, none confirmed)

Format: epigraph → intro → sections (O Que Aconteceu, O Que Se Perdeu, Teorias Populares) → Conexões.

**Content restriction:** Do NOT reveal the true cause of the Apostasia.

- [ ] **Step 4: Create a-umbra.md**

Read `kravir\Ameaças\Umbra.md` for reference. Write what is publicly known:
- Not darkness — a hunger that consumes souls
- Sensory description (whispers, cold, shadow-fog)
- Manifestation levels that common people know about
- Praga da Alma (dead outside Pyre radius rise as undead)
- Protection: Sacred Pyres, salt, light, staying indoors

Format: epigraph → intro → sections (Natureza, Manifestações, Praga da Alma, Como Se Proteger) → Conexões.

**Content restriction:** Do NOT include Podridão da Alma mechanics, Moldura Negra details, or Umbra origin theories that aren't folk knowledge.

- [ ] **Step 5: Create as-piras-sagradas.md**

Read `kravir\Organizações\Guardiões da Pira e Portadores da Cinza.md` and the Pira section of `kravir\Ameaças\Umbra.md`. Write public knowledge:
- What they are (towers with sacred flame, protected radius)
- Why they matter (only defense against Umbra)
- How they work (Ramo Sacro, fuel, maintenance)
- Who tends them (Guardiões da Pira)
- What happens when one weakens or dies

Format: epigraph → intro → sections (O Que São, Como Funcionam, Quem As Mantém, O Que Acontece Sem Elas) → Conexões.

- [ ] **Step 6: Create tempestades-umbrais.md**

Read `kravir\Ameaças\Tempestades Umbrais.md`. Write public knowledge:
- Natural phenomenon — unpredictable timing
- The 5 grades (brief description of each, without game mechanics)
- Precursor signs (animals behaving strangely, salt turning dark, Pira flickering)
- What happens during a storm (sensory description)
- Folk wisdom about surviving them

Format: epigraph → intro → sections (Natureza, Os Cinco Graus, Sinais Precursores, Sabedoria Popular) → Conexões.

**Content restriction:** Do NOT include mechanical effects (Stress, dice penalties), DM event tables, or Pira interaction rules.

- [ ] **Step 7: Build and verify**

```bash
cd "C:\Users\Rafael Xavier\OneDrive\dominio-de-lumen-wiki" && npm run build
```

Expected: Build succeeds. All O Mundo pages render. Sidebar shows "O Mundo" category with 5 entries.

---

## Chunk 5: Content — Locais

### Task 10: Create Locais section — visited locations (detailed)

**Files:**
- Create: `docs/locais/_category_.json`
- Create: `docs/locais/encruzilhada.md`
- Create: `docs/locais/sino.md`
- Create: `docs/locais/ponte-das-correntes.md`

**Source Reference (read-only):**
- `C:\Users\Rafael Xavier\OneDrive\kravir\Cidades\Encruzilhada.md`
- `C:\Users\Rafael Xavier\OneDrive\kravir\Cidades\Sino.md`
- `C:\Users\Rafael Xavier\OneDrive\kravir\Notas de DM\Ato I\As Cinzas nas Docas\Beats\Beat 6\Sub-beat 3 - Sino.md` (for Ponte das Correntes physical description only)
- `C:\Users\Rafael Xavier\OneDrive\kravir\Notas de DM\Ato I\As Cinzas nas Docas\Beats\Beat 6\Jornadas\Jornada A - A Ponte das Correntes.md` (for physical description of the bridge only)

- [ ] **Step 1: Create _category_.json**

Create `docs/locais/_category_.json`:
```json
{
  "label": "Locais",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "Cidades, vilas e estradas do Domínio de Lúmen."
  }
}
```

- [ ] **Step 2: Create encruzilhada.md**

Read `kravir\Cidades\Encruzilhada.md`. Write a detailed page covering:
- Sensory overview (canals, salt, bridges, fog)
- Geography & structure (districts the players explored)
- Key districts: Farol-Pira, Mercado das Pontes, Baixo-Cinza, Docas Encharcadas
- Governance (Senescal Aurélio Draeven — surface-level, no conspiracies)
- Commerce & daily life
- The Pira Sagrada de Encruzilhada
- Atmosphere and tensions visible to anyone walking the streets

Format: epigraph → intro → sections (Visão Geral, Distritos, Governança, Comércio, A Pira, Atmosfera) → Conexões.

**Content restriction:** Do NOT reveal Véu-de-Cinza operations, Cassara's true role, Imir's full network, assassination plot details, or underground tunnel systems.

- [ ] **Step 3: Create sino.md**

Read `kravir\Cidades\Sino.md`. Write a detailed page covering:
- The dying village in the valley (30 souls)
- The broken bell tower
- The Torre da Pira Sagrada (weakening flame)
- The Colosso fragments (divine hand, shoulder)
- Amber fog from the Bosque
- Isolation, silence, decay

Format: epigraph → intro → sections (Visão Geral, A Pira de Sino, Os Restos do Colosso, Atmosfera, Arredores) → Conexões.

**Content restriction:** Do NOT mention the Costuradores, the Armazém Velho occupation, the Arca da Maré Cega, or the "homens pálidos". Players have just arrived — they don't know about the secret warehouse yet.

- [ ] **Step 4: Create ponte-das-correntes.md**

Read physical descriptions from Jornada A and Sub-beat 3. Write a detailed page covering:
- The massive suspended bridge between Encruzilhada region and Urna
- Physical structure (iron chains, stone pillars, gaps, weather)
- The crossing experience (wind, vertigo, sounds)
- Who uses it (merchants, smugglers, the desperate)
- The Nó (midpoint junction)
- Dangers (weather, bandits, the height)

Format: epigraph → intro → sections (Estrutura, A Travessia, O Nó, Perigos) → Conexões.

**Content restriction:** Do NOT reveal Sevra Kael's slave operation details, Korvald's role, or the specific events of the party's crossing (those go in session recaps).

---

### Task 11: Create Locais section — unvisited locations (brief)

**Files:**
- Create: `docs/locais/veu.md`
- Create: `docs/locais/urna.md`
- Create: `docs/locais/trono-de-deus.md`
- Create: `docs/locais/pavio.md`

**Source Reference (read-only):**
- `C:\Users\Rafael Xavier\OneDrive\kravir\Cidades\Véu.md`
- `C:\Users\Rafael Xavier\OneDrive\kravir\Cidades\Urna.md`
- `C:\Users\Rafael Xavier\OneDrive\kravir\Cidades\Trono de Deus.md`
- `C:\Users\Rafael Xavier\OneDrive\kravir\Cidades\Pavio.md`

- [ ] **Step 1: Create veu.md**

2-3 paragraphs. What travelers and rumors say: a city that forbids the imperial cult, full of secrets, where forbidden knowledge is traded in whispers. Epigraph + brief content + Conexões.

- [ ] **Step 2: Create urna.md**

2-3 paragraphs. What is publicly known: the industrial city of smoke and chains, factories that never sleep, ruled by the Grão-Arconte. Known for siege machines and harsh conditions. Epigraph + brief content + Conexões.

- [ ] **Step 3: Create trono-de-deus.md**

2-3 paragraphs. The distant imperial capital: an archipelago city, seat of the Imperador da Unidade, center of all power. Terrifying, magnificent, unreachable for most. Epigraph + brief content + Conexões.

- [ ] **Step 4: Create pavio.md**

2-3 paragraphs. The frozen mountain fortress: broken steam technology, sealed libraries, paranoid ruler. A place where knowledge goes to die — or to hide. Epigraph + brief content + Conexões.

- [ ] **Step 5: Build and verify**

```bash
cd "C:\Users\Rafael Xavier\OneDrive\dominio-de-lumen-wiki" && npm run build
```

Expected: Build succeeds. Sidebar shows "Locais" with 7 entries.

---

## Chunk 6: Content — Facções

### Task 12: Create Facções section

**Files:**
- Create: `docs/faccoes/_category_.json`
- Create: `docs/faccoes/a-marcha.md`
- Create: `docs/faccoes/o-sindicato.md`
- Create: `docs/faccoes/guardioes-da-pira.md`
- Create: `docs/faccoes/os-costuradores.md`
- Create: `docs/faccoes/rainhas-de-damask.md`

**Source Reference (read-only):**
- `C:\Users\Rafael Xavier\OneDrive\kravir\Organizações\A Marcha.md`
- `C:\Users\Rafael Xavier\OneDrive\kravir\Organizações\O Sindicato.md`
- `C:\Users\Rafael Xavier\OneDrive\kravir\Organizações\Guardiões da Pira e Portadores da Cinza.md`
- `C:\Users\Rafael Xavier\OneDrive\kravir\Organizações\Os Costuradores.md`
- `C:\Users\Rafael Xavier\OneDrive\kravir\Organizações\Rainhas de Damask.md`

- [ ] **Step 1: Create _category_.json**

Create `docs/faccoes/_category_.json`:
```json
{
  "label": "Facções",
  "position": 3,
  "link": {
    "type": "generated-index",
    "description": "As organizações que movem o Domínio de Lúmen."
  }
}
```

- [ ] **Step 2: Create a-marcha.md**

Read source. Write what players know from encounters:
- Military order that patrols roads between cities
- Brutal, authoritarian, corroded armor, chains as symbols
- Capitão Verek Draal seen in Encruzilhada (briefly)
- Reputation: feared, respected, corrupt

Format: epigraph → intro → sections (O Que São, Presença em Encruzilhada, Reputação) → Conexões.

**Content restriction:** Do NOT reveal internal structure, Draal's personal obsession with Leonar, or corruption details beyond common knowledge.

- [ ] **Step 3: Create o-sindicato.md**

Read source. Write what players know:
- Criminal underworld of Encruzilhada
- Imir dos Cais as public-facing spokesman
- Services: safe passage, information, contraband
- Operates from Baixo-Cinza and the docks
- Ambiguous — protectors or parasites?

Format: epigraph → intro → sections (O Que É, Imir dos Cais, Serviços, Onde Operam) → Conexões.

**Content restriction:** Do NOT reveal sub-factions (Guardiões da Ponte, Contrabandistas, Vozes de Cinza), Véu-de-Cinza infiltration, or full organizational structure.

- [ ] **Step 4: Create guardioes-da-pira.md**

Read source. Write public knowledge:
- Religious order that maintains Sacred Pyres across the Domínio
- Two branches: Guardiões da Pira (stationed, maintain fire) and Portadores da Cinza (itinerant, spread faith/ashes)
- Present in every city with a Pyre
- Devotion, sacrifice, thankless duty
- Encountered: Irmã Cael, Jovem Tal, Velho Harren in Sino; Irmão Torren itinerant

Format: epigraph → intro → sections (Os Guardiões, Os Portadores da Cinza, Presença no Domínio) → Conexões.

- [ ] **Step 5: Create os-costuradores.md**

Write ONLY what PCs have discovered through gameplay:
- A mysterious organization that manipulates memories and identities
- Encountered an "Ancião Costurador" in Encruzilhada (escaped)
- Fought "Fios Vivos" — agents with shifting faces
- Found evidence of their activities (sealed crates, sewn-silent witnesses)
- Symbol: three intertwined lines
- Connected to the conspiracy against Casa Versari

Format: epigraph → intro → sections (O Que Sabemos, Encontros, O Símbolo) → Conexões.

**Content restriction:** Do NOT reveal Agulhas Brancas/Tecelões Negros/Fios Vivos sub-factions, Elenya Vorst, Véu origins, or their full operational scope. Only what the PCs saw and learned.

- [ ] **Step 6: Create rainhas-de-damask.md**

Write what is commonly known:
- Five rival pirate/merchant lords who control trade routes
- Each has territory and a reputation
- Powerful, dangerous, independent from the Imperium
- Players know they exist but haven't met any directly

Format: epigraph → intro → brief section → Conexões.

**Content restriction:** Do NOT name individual queens or reveal their specific operations. Players haven't interacted with them.

- [ ] **Step 7: Build and verify**

```bash
cd "C:\Users\Rafael Xavier\OneDrive\dominio-de-lumen-wiki" && npm run build
```

Expected: Build succeeds. Sidebar shows "Facções" with 5 entries.

---

## Chunk 7: Content — NPCs

### Task 13: Create NPCs section — Encruzilhada

**Files:**
- Create: `docs/npcs/_category_.json`
- Create: `docs/npcs/encruzilhada/_category_.json`
- Create: `docs/npcs/encruzilhada/imir-dos-cais.md`
- Create: `docs/npcs/encruzilhada/celestine-versari.md`
- Create: `docs/npcs/encruzilhada/hadrian-alquamar.md`
- Create: `docs/npcs/encruzilhada/theron-alquamar.md`
- Create: `docs/npcs/encruzilhada/mestre-corvinus.md`
- Create: `docs/npcs/encruzilhada/ama-selene.md`

**Source Reference (read-only):**
- NPC details from Sub-Beat 2.75 and earlier beats (already read during exploration)
- `C:\Users\Rafael Xavier\OneDrive\kravir\NPCs\` folder for individual NPC files if they exist

- [ ] **Step 1: Create parent _category_.json**

Create `docs/npcs/_category_.json`:
```json
{
  "label": "Personagens",
  "position": 4,
  "link": {
    "type": "generated-index",
    "description": "NPCs encontrados durante a campanha."
  }
}
```

- [ ] **Step 2: Create Encruzilhada sub-category**

Create `docs/npcs/encruzilhada/_category_.json`:
```json
{
  "label": "Encruzilhada",
  "position": 1
}
```

- [ ] **Step 3: Create imir-dos-cais.md**

NPC format. What players know:
- Public face of the Sindicato in Encruzilhada
- Appearance: distinctive, memorable
- Met directly by the party
- Offered services, information broker

**Content restriction:** Do NOT reveal his full network, relationship with Theron, or role in the larger conspiracy.

- [ ] **Step 4: Create celestine-versari.md**

NPC format. What players know:
- Noble woman rescued from Forte Versari
- Target of a Costurador plot (Soro da Nona Vela)
- Daughter of Hadrian Alquamar
- Became an ally after rescue
- Her husband Aldren Versari is catatonic ("Apagamento")

**Content restriction:** Do NOT reveal the full scope of the conspiracy against her or Cassara's involvement.

- [ ] **Step 5: Create hadrian-alquamar.md**

NPC format. What players know:
- Patriarch of Casa Alquamar, Celestine's father
- Met at Palácio de Cristal
- Cold, calculating, but cares about his daughter
- Offered resources (money, lab access, maps) in exchange for information
- Admitted past dealings with Urna intermediaries

- [ ] **Step 6: Create theron-alquamar.md**

NPC format. What players know:
- Celestine's brother, hostile toward her
- Sharp-featured, impeccably dressed
- Probing questions, suspicious behavior
- Players may suspect he's untrustworthy

**Content restriction:** Do NOT reveal he's an informant for Imir/Sindicato.

- [ ] **Step 7: Create mestre-corvinus.md**

NPC format. What players know:
- Alchemist of Casa Alquamar
- Met in Torre do Observatório
- Analyzed samples, explained "Apagamento" condition
- Mentioned Cassara de Âmbar as source of rare materials
- Suggested Crystal could be used as "anchor" for Aldren's soul

- [ ] **Step 8: Create ama-selene.md**

NPC format. What players know:
- Elderly servant, loyal to Celestine
- Greeted the party at Palácio de Cristal
- Knows family secrets, protective
- Offered guidance through the palace

---

### Task 14: Create NPCs section — Ponte das Correntes & Sino

**Files:**
- Create: `docs/npcs/ponte-das-correntes/_category_.json`
- Create: `docs/npcs/ponte-das-correntes/sevra-kael.md`
- Create: `docs/npcs/ponte-das-correntes/gael.md`
- Create: `docs/npcs/sino/_category_.json`
- Create: `docs/npcs/sino/irma-valkara.md`

- [ ] **Step 1: Create Ponte das Correntes sub-category**

Create `docs/npcs/ponte-das-correntes/_category_.json`:
```json
{
  "label": "Ponte das Correntes",
  "position": 2
}
```

- [ ] **Step 2: Create sevra-kael.md**

NPC format. What players know:
- Encountered on the Ponte das Correntes
- Defeated by the party but released without her cargo
- Role on the bridge (smuggler/enforcer)

**Content restriction:** Keep to what players experienced. Do NOT reveal her full operation or future plans.

- [ ] **Step 3: Create gael.md**

NPC format. What players know:
- Guide/NPC encountered on the Ponte das Correntes
- Helped the party navigate the crossing
- Knowledge of the bridge and its dangers

- [ ] **Step 4: Create Sino sub-category**

Create `docs/npcs/sino/_category_.json`:
```json
{
  "label": "Sino",
  "position": 3
}
```

- [ ] **Step 5: Create irma-valkara.md**

NPC format. What players know:
- Encountered in the Fragmento do Colosso (the divine hand)
- Lyos's bracelet drained her partially
- A penitent figure in the ruins

**Content restriction:** Do NOT reveal her full backstory or connection to larger plots.

- [ ] **Step 6: Build and verify**

```bash
cd "C:\Users\Rafael Xavier\OneDrive\dominio-de-lumen-wiki" && npm run build
```

Expected: Build succeeds. Sidebar shows "Personagens" with 3 sub-categories and 9 NPC entries.

---

## Chunk 8: Content — Ameaças & Final Intro

### Task 15: Create Ameaças section

**Files:**
- Create: `docs/ameacas/_category_.json`
- Create: `docs/ameacas/criaturas-umbrais.md`
- Create: `docs/ameacas/praga-da-alma.md`

- [ ] **Step 1: Create _category_.json**

Create `docs/ameacas/_category_.json`:
```json
{
  "label": "Ameaças",
  "position": 5,
  "link": {
    "type": "generated-index",
    "description": "Os perigos que espreitam no Domínio de Lúmen."
  }
}
```

- [ ] **Step 2: Create criaturas-umbrais.md**

Read `kravir\Ameaças\Umbra.md` for creature references. Write public knowledge:
- Beasts born from or corrupted by the Umbra
- General types people know about (shadow-beasts, corrupted animals, worse things in deep Umbra)
- Behavior: more active at night, driven away by Pira light
- What travelers know about avoiding them
- Sensory descriptions (cold, whispers, wrong shapes)

Format: epigraph → intro → sections (Natureza, Tipos Conhecidos, Como Se Proteger) → Conexões.

**Content restriction:** Do NOT include stat blocks, mechanical details, or creature types the players haven't encountered.

- [ ] **Step 3: Create praga-da-alma.md**

Write public knowledge:
- The dead who rise outside the Pyre's protection
- Not undead by choice — consumed by Umbra, animated as hollow shells
- Common knowledge: bury your dead within Pyre radius, or burn them
- What happens to those taken by the Plague (mindless, hungry, drawn to the living)
- Folk practices around death and burial

Format: epigraph → intro → sections (O Que É, Como Acontece, Costumes de Sepultamento) → Conexões.

---

### Task 16: Update intro.md with full welcome page

**Files:**
- Modify: `docs/intro.md`

- [ ] **Step 1: Rewrite intro.md**

Replace the placeholder with a proper welcome page:
- Epigraph
- Welcome text explaining what this wiki is
- Brief overview of each section (O Mundo, Locais, Facções, Personagens, Ameaças)
- Links to each section
- Note that this is a living document that grows with the campaign

---

### Task 17: Final build verification

- [ ] **Step 1: Full build**

```bash
cd "C:\Users\Rafael Xavier\OneDrive\dominio-de-lumen-wiki" && npm run build
```

Expected: Build succeeds with zero errors.

- [ ] **Step 2: Start dev server and verify navigation**

```bash
cd "C:\Users\Rafael Xavier\OneDrive\dominio-de-lumen-wiki" && npm start
```

Verify manually:
- Homepage renders with hero + 4 cards
- All navbar links work
- Sidebar shows all 5 categories with correct entries
- All cross-links between pages work
- Blog page renders (empty, ready for posts)
- Dark mode is default
- Colors match the amber/dark palette

- [ ] **Step 3: Verify content restrictions**

Search all created docs for any leaked secrets:
```bash
cd "C:\Users\Rafael Xavier\OneDrive\dominio-de-lumen-wiki" && grep -ri "costurador\|arca da maré\|senhores do éter\|véu-de-cinza\|cassara\|conspiração\|assassin" docs/ --include="*.md" -l
```

Expected: Only `os-costuradores.md` should match (and only with player-known info). No other files should contain secret information.

---

## Summary

| Chunk | Tasks | Files Created/Modified |
|-------|-------|----------------------|
| 1. Scaffold & Config | 1-5 | 4 modified, 13 deleted, 1 created |
| 2. Homepage | 6-7 | 4 created/modified |
| 3. Blog | 8 | 2 modified |
| 4. O Mundo | 9 | 6 created |
| 5. Locais | 10-11 | 8 created |
| 6. Facções | 12 | 6 created |
| 7. NPCs | 13-14 | 12 created |
| 8. Ameaças & Intro | 15-17 | 4 created/modified |
| **Total** | **17 tasks** | **~40 files** |
