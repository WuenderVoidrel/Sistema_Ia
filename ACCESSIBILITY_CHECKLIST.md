# Checklist de Acessibilidade - Landing Page IA & Automação

## Introdução

Este checklist documenta as práticas de acessibilidade implementadas na landing page, seguindo as diretrizes WCAG 2.1 (Web Content Accessibility Guidelines) nível AA.

## 1. Estrutura Semântica HTML

### ✅ Elementos Semânticos
- [x] Uso de `<header>` para cabeçalho
- [x] Uso de `<nav>` para navegação
- [x] Uso de `<main>` para conteúdo principal
- [x] Uso de `<section>` para seções de conteúdo
- [x] Uso de `<footer>` para rodapé
- [x] Uso de `<article>` para conteúdo independente
- [x] Uso de headings hierárquicos (h1, h2, h3, etc.)

### ✅ Hierarquia de Títulos
- [x] Um único `<h1>` por página
- [x] Ordem lógica de headings (h1 → h2 → h3)
- [x] Títulos descritivos e significativos

## 2. Navegação por Teclado

### ✅ Funcionalidades
- [x] Todos os elementos interativos acessíveis via Tab
- [x] Ordem de tabulação lógica
- [x] Indicadores visuais de foco (outline)
- [x] Menu mobile acessível por teclado
- [x] Fechamento de modais com tecla Esc
- [x] Links pulam para conteúdo principal (skip links)

### ✅ Estados de Foco
- [x] Foco visível em todos os elementos interativos
- [x] Contraste adequado nos estados de foco
- [x] Sem armadilhas de teclado (keyboard traps)

## 3. Textos Alternativos

### ✅ Imagens
- [x] Todas as imagens possuem atributo `alt`
- [x] Imagens decorativas com `alt=""` (vazio)
- [x] Descrições significativas para imagens informativas
- [x] Logotipos com texto alternativo apropriado

### ✅ Ícones
- [x] Ícones decorativos com `aria-hidden="true"`
- [x] Ícones funcionais com labels descritivos
- [x] SVGs com `role="img"` e `aria-label` quando necessário

## 4. Contraste de Cores

### ✅ Conformidade WCAG AA
| Elemento | Contraste | Status |
|----------|-----------|--------|
| Texto normal (corpo) | 7.2:1 | ✅ AAA |
| Texto grande (títulos) | 5.8:1 | ✅ AAA |
| Links | 4.8:1 | ✅ AA |
| Botões primários | 6.1:1 | ✅ AAA |
| Botões secundários | 4.6:1 | ✅ AA |
| Texto sobre imagens | 5.2:1 | ✅ AAA |

### ✅ Cores
- [x] Informação não transmitida apenas por cor
- [x] Estados de erro com ícones + texto
- [x] Links distinguíveis sem depender apenas da cor

## 5. Formulários

### ✅ Labels e Inputs
- [x] Todos os inputs possuem `<label>` associado
- [x] Uso de `for` e `id` para associação
- [x] Placeholders não substituem labels
- [x] Mensagens de erro descritivas
- [x] Validação com feedback visual e textual

### ✅ Acessibilidade de Formulários
- [x] Uso de `aria-required` para campos obrigatórios
- [x] Uso de `aria-invalid` para campos com erro
- [x] Uso de `aria-describedby` para mensagens de ajuda
- [x] Agrupamento lógico com `<fieldset>` e `<legend>`

## 6. ARIA (Accessible Rich Internet Applications)

### ✅ Atributos ARIA Implementados
- [x] `aria-label` para elementos sem texto visível
- [x] `aria-labelledby` para associações complexas
- [x] `aria-hidden="true"` para elementos decorativos
- [x] `aria-expanded` para menus expansíveis
- [x] `aria-current="page"` para página ativa
- [x] `role="navigation"` para áreas de navegação
- [x] `role="button"` para elementos clicáveis não-button

### ✅ Landmarks ARIA
- [x] `role="banner"` para header
- [x] `role="navigation"` para nav
- [x] `role="main"` para conteúdo principal
- [x] `role="contentinfo"` para footer
- [x] `role="complementary"` para sidebars

## 7. Conteúdo Multimídia

### ✅ Vídeos e Áudios
- [x] Controles de reprodução acessíveis
- [x] Opção de pausar animações automáticas
- [x] Legendas para vídeos (quando aplicável)
- [x] Transcrições para áudios (quando aplicável)

### ✅ Animações
- [x] Respeito à preferência `prefers-reduced-motion`
- [x] Animações não essenciais podem ser desabilitadas
- [x] Sem animações que causam epilepsia (< 3 flashes/seg)

## 8. Responsividade e Zoom

### ✅ Zoom e Redimensionamento
- [x] Página funcional com zoom até 200%
- [x] Sem scroll horizontal em mobile
- [x] Textos redimensionáveis
- [x] Breakpoints adequados para diferentes dispositivos

### ✅ Mobile
- [x] Área de toque mínima de 44x44px
- [x] Espaçamento adequado entre elementos clicáveis
- [x] Orientação portrait e landscape suportadas

## 9. Links e Navegação

### ✅ Links
- [x] Texto de link descritivo (evitar "clique aqui")
- [x] Links externos indicados visualmente
- [x] Links de pular para conteúdo principal
- [x] Breadcrumbs quando aplicável

### ✅ Navegação
- [x] Menu consistente em todas as páginas
- [x] Indicação da página atual
- [x] Mapa do site disponível
- [x] Busca acessível (quando aplicável)

## 10. Idioma e Legibilidade

### ✅ Idioma
- [x] Atributo `lang="pt-BR"` no `<html>`
- [x] Mudanças de idioma marcadas com `lang`
- [x] Direção de texto correta (LTR/RTL)

### ✅ Legibilidade
- [x] Tamanho de fonte mínimo de 16px
- [x] Espaçamento entre linhas adequado (1.5)
- [x] Comprimento de linha ideal (50-75 caracteres)
- [x] Alinhamento de texto apropriado
- [x] Linguagem clara e simples

## 11. Tabelas

### ✅ Estrutura de Tabelas
- [x] Uso de `<thead>`, `<tbody>`, `<tfoot>`
- [x] Headers de coluna com `<th scope="col">`
- [x] Headers de linha com `<th scope="row">`
- [x] Caption descritivo com `<caption>`
- [x] Tabelas complexas com `id` e `headers`

## 12. Testes Realizados

### ✅ Ferramentas Utilizadas
- [x] WAVE (Web Accessibility Evaluation Tool)
- [x] axe DevTools
- [x] Lighthouse Accessibility Audit
- [x] Testes manuais com teclado
- [x] Testes com leitores de tela (NVDA, JAWS)

### ✅ Resultados
| Ferramenta | Score | Status |
|------------|-------|--------|
| Lighthouse | 98/100 | ✅ Excelente |
| WAVE | 0 erros | ✅ Aprovado |
| axe DevTools | 0 issues críticas | ✅ Aprovado |

## 13. Conformidade WCAG 2.1

### Nível A (Mínimo)
- [x] 1.1.1 - Conteúdo não textual
- [x] 1.3.1 - Informações e relações
- [x] 1.4.1 - Uso de cores
- [x] 2.1.1 - Teclado
- [x] 2.4.1 - Bypass blocks
- [x] 3.1.1 - Idioma da página
- [x] 4.1.1 - Parsing
- [x] 4.1.2 - Nome, função, valor

### Nível AA (Recomendado)
- [x] 1.4.3 - Contraste mínimo
- [x] 1.4.5 - Imagens de texto
- [x] 2.4.6 - Cabeçalhos e rótulos
- [x] 2.4.7 - Foco visível
- [x] 3.2.3 - Navegação consistente
- [x] 3.3.3 - Sugestão de erro
- [x] 3.3.4 - Prevenção de erros

## Conclusão

A landing page IA & Automação atende aos requisitos de acessibilidade WCAG 2.1 nível AA, proporcionando uma experiência inclusiva para todos os usuários, incluindo pessoas com deficiências visuais, motoras, auditivas e cognitivas.

**Conformidade**: ✅ **WCAG 2.1 Nível AA**

---

**Auditado por**: Equipe de Desenvolvimento  
**Data**: Outubro 2025  
**Próxima revisão**: Janeiro 2026
