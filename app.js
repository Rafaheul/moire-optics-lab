const state = {
  language: "en",
  page: "geometric",
  collapsed: false,
  geometry: { period1: 14, period2: 15, angle: 1.5, waveform: "sinusoidal", combination: "multiply" },
  sampling: { frequency: 70, angle: 8, phase: 0, density: 96, blur: 1.2, noise: 0.02, waveform: "sinusoidal" },
};

const translations = {
  en: {
    language: "Language", nav_geometric: "Geometric Moiré", nav_sampling: "Sampling & aliasing", nav_theory: "Theory",
    eyebrow: "INTERACTIVE OPTICS LAB", title: "Moiré Optics Lab", subtitle: "Explore spatial beats and sampling aliasing in real time.",
    geometric_heading: "See the beat emerge", geometric_intro: "Move a control and the three patterns update immediately.",
    grid1_period: "Grid 1 period", grid2_period: "Grid 2 period", relative_angle: "Relative angle", advanced: "Advanced controls",
    waveform: "Waveform", binary: "Binary lines", sinusoidal: "Sinusoidal", combination: "Combination", multiply: "Multiply", average: "Average", minimum: "Minimum",
    estimated_period: "Estimated Moiré period", grid1: "Grid 1", grid2: "Grid 2", combined: "Combined pattern",
    geometric_note: "The closer the spatial frequencies and orientations, the larger the visible beat pattern.",
    sampling_heading: "Watch a frequency fold", sampling_intro: "A periodic field above Nyquist can appear as a lower false frequency after sampling.",
    signal_frequency: "Signal frequency", signal_angle: "Signal angle", signal_phase: "Signal phase", sampling_density: "Sampling grid", pre_sampling_blur: "Pre-sampling blur", noise: "Sample noise",
    input_frequency: "Input frequency", apparent_frequency: "Alias frequency", nyquist: "Nyquist limit", continuous_field: "Continuous field", sampled_output: "Sampled output", frequency_space: "Frequency space",
    sampling_note: "This fast visual model is educational; the Python reference model retains the detailed numerical implementation and tests.",
    status_alias: "Aliasing: the fundamental exceeds Nyquist in at least one axis.", status_safe: "The fundamental is within the displayed Nyquist region.",
    theory_heading: "Theory, step by step", theory_beat_title: "What is Moiré?", theory_beat: "Moiré is a visible large-scale pattern created when two similar repeated patterns overlap with a small difference in spacing or direction.",
    theory_vector_title: "What is aliasing?", theory_vector: "Aliasing is a false lower-frequency pattern that appears when a repeating signal is sampled too coarsely to represent it uniquely.",
    theory_nyquist_title: "Nyquist frequency", theory_nyquist: "The Nyquist frequency is half the sampling frequency: the highest fundamental frequency that the ideal sampling grid can represent without folding.",
    collapse: "Collapse navigation", expand: "Expand navigation", switch_language: "Switch language", app_navigation: "Application navigation", lab_sections: "Lab sections", geometric_controls: "Geometric controls", sampling_controls: "Sampling controls",
    three_toggle_open: "Open 3D view", three_toggle_close: "Close 3D view", three_loading: "Loading 3D view...", three_hint: "Optional WebGL height map. Drag to orbit, scroll to zoom.", three_title: "Moiré height map", three_note: "The surface height and color are derived from the live combined pattern.", three_fallback: "The 3D view could not be loaded. Check your connection or browser WebGL support, then try again.", three_canvas_label: "Interactive three-dimensional Moiré surface",
    help_heading: "CONCEPT GUIDE", close_help: "Close concept guide", help_for: "Learn about", page_guide: "Page guide", developer_credit: "Developed by Rafael V F Santos · 2026",
  },
  pt: {
    language: "Idioma", nav_geometric: "Moiré geométrico", nav_sampling: "Amostragem e aliasing", nav_theory: "Teoria",
    eyebrow: "LABORATÓRIO INTERATIVO DE ÓPTICA", title: "Laboratório de Moiré", subtitle: "Explore batimentos espaciais e aliasing em tempo real.",
    geometric_heading: "Veja o batimento surgir", geometric_intro: "Mova um controle e os três padrões são atualizados imediatamente.",
    grid1_period: "Período da grade 1", grid2_period: "Período da grade 2", relative_angle: "Ângulo relativo", advanced: "Controles avançados",
    waveform: "Forma de onda", binary: "Linhas binárias", sinusoidal: "Senoidal", combination: "Combinação", multiply: "Multiplicar", average: "Média", minimum: "Mínimo",
    estimated_period: "Período de Moiré estimado", grid1: "Grade 1", grid2: "Grade 2", combined: "Padrão combinado",
    geometric_note: "Quanto mais próximas forem as frequências espaciais e orientações, maior será o padrão de batimento visível.",
    sampling_heading: "Veja uma frequência se dobrar", sampling_intro: "Um campo periódico acima de Nyquist pode aparecer como uma frequência falsa mais baixa após a amostragem.",
    signal_frequency: "Frequência do sinal", signal_angle: "Ângulo do sinal", signal_phase: "Fase do sinal", sampling_density: "Grade de amostragem", pre_sampling_blur: "Desfoque pré-amostragem", noise: "Ruído da amostra",
    input_frequency: "Frequência de entrada", apparent_frequency: "Frequência de alias", nyquist: "Limite de Nyquist", continuous_field: "Campo contínuo", sampled_output: "Saída amostrada", frequency_space: "Espaço de frequências",
    sampling_note: "Este modelo visual rápido é educacional; o modelo de referência em Python preserva a implementação numérica detalhada e seus testes.",
    status_alias: "Aliasing: a fundamental excede Nyquist em pelo menos um eixo.", status_safe: "A fundamental está dentro da região de Nyquist exibida.",
    theory_heading: "Teoria, passo a passo", theory_beat_title: "O que é Moiré?", theory_beat: "Moiré é um padrão amplo e visível criado quando dois padrões repetitivos parecidos se sobrepõem com pequena diferença de espaçamento ou direção.",
    theory_vector_title: "O que é aliasing?", theory_vector: "Aliasing é um padrão falso de frequência menor que aparece quando um sinal repetitivo é amostrado de modo muito espaçado para ser representado de forma única.",
    theory_nyquist_title: "Frequência de Nyquist", theory_nyquist: "A frequência de Nyquist é a metade da frequência de amostragem: o maior valor fundamental que uma grade ideal representa sem dobramento.",
    collapse: "Recolher navegação", expand: "Expandir navegação", switch_language: "Trocar idioma", app_navigation: "Navegação do aplicativo", lab_sections: "Seções do laboratório", geometric_controls: "Controles geométricos", sampling_controls: "Controles de amostragem",
    three_toggle_open: "Abrir visualização 3D", three_toggle_close: "Fechar visualização 3D", three_loading: "Carregando visualização 3D...", three_hint: "Mapa de altura WebGL opcional. Arraste para orbitar e use a roda para ampliar.", three_title: "Mapa de altura do Moiré", three_note: "A altura e a cor da superfície usam o padrão combinado em tempo real.", three_fallback: "Não foi possível carregar a visualização 3D. Verifique a conexão ou o suporte a WebGL do navegador e tente novamente.", three_canvas_label: "Superfície interativa tridimensional de Moiré",
    help_heading: "GUIA DO CONCEITO", close_help: "Fechar guia do conceito", help_for: "Saiba mais sobre", page_guide: "Guia da página", developer_credit: "Desenvolvido por Rafael V F Santos · 2026",
  },
};

const $ = (id) => document.getElementById(id);
const tr = (key) => translations[state.language][key] ?? key;

function setControlNumberValue(id, value) {
  const input = $(`${id}-number`);
  if (input && document.activeElement !== input) input.value = value;
}

const helpContent = {
  en: {
    grid1_period: { title: "Grid 1 period", body: "The period p is the distance between equal points of a pattern. A larger period spreads the lines apart and lowers spatial frequency (f = 1/p). Grid 1 stays at 0 degrees, so it is the reference for the comparison." },
    grid2_period: { title: "Grid 2 period", body: "This is the spacing of the second grating. Bringing its period close to Grid 1 makes their spatial frequencies close; the broad Moiré envelope then becomes easier to see. Keep the two values equal and vary the angle to isolate orientation." },
    relative_angle: { title: "Relative angle", body: "This rotates Grid 2 relative to Grid 1. Rotation changes the direction of its spatial-frequency vector. Even two gratings with the same period create a broad Moiré pattern when their directions differ slightly." },
    grid_waveform: { title: "Waveform", body: "Sinusoidal is a smooth, single-frequency starting point and is the default. Binary lines are useful for comparison, but their sharp edges add higher harmonics. Those extra frequencies can create additional fine structure and aliasing." },
    combination_mode: { title: "Combination", body: "This selects the visual rule used to combine the two displayed gratings. Multiply emphasizes coincident bright regions; average blends both; minimum retains the darker value. It is a display model, not a universal law for every physical setup." },
    signal_frequency: { title: "Signal frequency", body: "Frequency is counted in cycles across the displayed field of view (cycles/FOV). One cycle is one complete repeat of the wave, for example from one bright peak to the next bright peak. Thus, 70 cycles/FOV means 70 complete repeats across the full displayed width. Raising it packs more stripes into the same space. When a component exceeds the sampling limit, the sampled result can show a lower false frequency: an alias." },
    signal_angle: { title: "Signal angle", body: "This rotates the periodic field. In two dimensions, sampling depends on the horizontal and vertical components separately, so rotating the same total frequency can change whether and how it aliases." },
    signal_phase: { title: "Signal phase", body: "Phase shifts the pattern without changing its frequency or direction. It is useful for showing that sampling also depends on where the sample grid lands relative to the peaks and valleys." },
    sampling_density: { title: "Sampling grid", body: "This is the number of samples across each displayed axis. In this simplified model it acts as a sampling frequency of N cycles/FOV per axis, with a Nyquist limit near N/2. More samples preserve finer detail." },
    sampling_blur: { title: "Pre-sampling blur", body: "Blur suppresses the fastest spatial changes before sampling, acting like a low-pass filter. It can reduce aliases, but also softens real detail. The visual uses a fast box-blur approximation for teaching, not a calibrated optical model." },
    sampling_noise: { title: "Sample noise", body: "Noise adds a small repeatable variation to each sample. It makes the reconstruction less ideal and helps separate a true repeating alias from random-looking variation." },
    sampling_waveform: { title: "Waveform", body: "A sinusoid is the cleanest way to see the Nyquist idea because it starts with one fundamental frequency. Binary lines have abrupt edges and therefore many harmonics, making the sampling result deliberately more complex." },
    three_view: { title: "3D view", body: "This is an optional visual mapping: the live combined pattern controls surface height and color. It is useful for seeing broad envelopes, but height is not a physical height measurement. The 2D canvases remain the primary model." },
    frequency_space: { title: "How to read Frequency space", body: "This graph maps frequency rather than position. The red/orange arrow is the input frequency vector: its horizontal and vertical components are determined by signal frequency and angle. The cyan arrow is the aliased vector after folding into the allowed region. The translucent green-blue square centered at zero is the two-dimensional Nyquist region: each axis runs from -f_s/2 to +f_s/2. If the input arrow ends outside that square, the sampling grid cannot represent that fundamental uniquely; the cyan arrow shows the lower-frequency location that appears instead." },
    page_geometric: { title: "Geometric Moiré: how to use this page", body: "Compare the three canvases from left to right: Grid 1 is the fixed reference, Grid 2 is the pattern you change, and Combined shows their superposition. Start with sinusoidal waves. Make the periods almost equal or give equal periods a small relative angle; both create a broad Moiré envelope. The estimated period summarizes the fundamental-vector difference. This page studies overlap geometry, not sampling; the optional 3D surface is only another view of the same combined pattern." },
    page_sampling: { title: "Sampling and aliasing: how to use this page", body: "This page begins with a continuous periodic field, then represents it on a finite sampling grid. Compare Continuous field, Sampled output, and Frequency space. With the grid at 96 by 96, try 40 cycles/FOV and then 70 cycles/FOV; the latter crosses Nyquist and folds to an apparent lower frequency. Change angle to see two-dimensional folding, blur to suppress high frequencies before sampling, and noise to distinguish a structured alias from variation." },
    page_theory: { title: "Theory: how to read this page", body: "The first three cards define the central ideas: Moiré, aliasing, and Nyquist frequency. The numbered lessons then move from spatial period and frequency to overlap geometry, two-dimensional vectors, sampling, real-world examples, and model limits. Use the compact formulas as maps, then return to either interactive page and test one prediction at a time. In this lab, f_vec(...) means a spatial-frequency vector and all units are educational display-model units." },
  },
  pt: {
    grid1_period: { title: "Período da grade 1", body: "O período p é a distância entre pontos equivalentes de um padrão. Um período maior afasta as linhas e reduz a frequência espacial (f = 1/p). A Grade 1 fica em 0 graus e serve de referência para a comparação." },
    grid2_period: { title: "Período da grade 2", body: "Este é o espaçamento da segunda grade. Aproximar seu período do da Grade 1 aproxima as frequências espaciais; assim, o envelope amplo de Moiré fica mais visível. Iguale os períodos e varie o ângulo para isolar a orientação." },
    relative_angle: { title: "Ângulo relativo", body: "Ele gira a Grade 2 em relação à Grade 1. A rotação muda a direção do vetor de frequência espacial. Mesmo grades de mesmo período criam um padrão amplo de Moiré quando suas direções diferem um pouco." },
    grid_waveform: { title: "Forma de onda", body: "A senoide é suave, tem uma frequência fundamental e é o ponto de partida padrão. Linhas binárias servem para comparar, mas suas bordas abruptas introduzem harmônicos. Essas frequências extras podem criar detalhes finos e aliasing adicional." },
    combination_mode: { title: "Combinação", body: "Escolhe a regra visual que combina as duas grades mostradas. Multiplicar destaca regiões claras coincidentes; média mistura ambas; mínimo mantém o valor mais escuro. É um modelo de exibição, não uma lei universal para qualquer montagem física." },
    signal_frequency: { title: "Frequência do sinal", body: "A frequência é contada em ciclos ao longo de todo o campo de visão exibido (ciclos/campo). Um ciclo é uma repetição completa da onda, por exemplo de um pico claro ao próximo pico claro. Assim, 70 ciclos/campo significa 70 repetições completas em toda a largura mostrada. Aumentá-la coloca mais faixas no mesmo espaço. Quando uma componente ultrapassa o limite de amostragem, o resultado pode mostrar uma frequência falsa menor: um alias." },
    signal_angle: { title: "Ângulo do sinal", body: "Ele gira o campo periódico. Em duas dimensões, a amostragem depende separadamente das componentes horizontal e vertical; por isso, girar a mesma frequência total pode mudar se, e como, ocorre aliasing." },
    signal_phase: { title: "Fase do sinal", body: "A fase desloca o padrão sem alterar frequência ou direção. Ela mostra que a amostragem também depende de onde a grade de amostras cai em relação aos picos e vales." },
    sampling_density: { title: "Grade de amostragem", body: "É o número de amostras em cada eixo mostrado. Neste modelo simplificado, atua como frequência de amostragem de N ciclos/campo por eixo, com limite de Nyquist próximo de N/2. Mais amostras preservam detalhes mais finos." },
    sampling_blur: { title: "Desfoque pré-amostragem", body: "O desfoque reduz as variações espaciais mais rápidas antes da amostragem, como um filtro passa-baixas. Ele pode reduzir aliases, mas também suaviza detalhes reais. Aqui é usada uma aproximação rápida por box blur, apenas didática." },
    sampling_noise: { title: "Ruído da amostra", body: "O ruído adiciona uma pequena variação repetível a cada amostra. Ele torna a reconstrução menos ideal e ajuda a diferenciar um alias periódico de uma variação com aparência aleatória." },
    sampling_waveform: { title: "Forma de onda", body: "Uma senoide é a forma mais clara para enxergar Nyquist, pois começa com uma única frequência fundamental. Linhas binárias têm bordas abruptas e, portanto, muitos harmônicos; o resultado da amostragem fica propositalmente mais complexo." },
    three_view: { title: "Visualização 3D", body: "Esta é uma representação visual opcional: o padrão combinado controla a altura e a cor da superfície. Ajuda a enxergar envelopes amplos, mas a altura não é uma medida física. Os canvases 2D continuam sendo o modelo principal." },
    frequency_space: { title: "Como ler o Espaço de frequências", body: "Este gráfico mostra frequência, e não posição. A seta vermelho-alaranjada é o vetor de frequência de entrada: suas componentes horizontal e vertical são definidas pela frequência e pelo ângulo do sinal. A seta ciano é o vetor com alias depois de dobrado para a região permitida. O quadrado verde-azulado translúcido, centrado no zero, é a região de Nyquist bidimensional: cada eixo vai de -f_s/2 a +f_s/2. Se a ponta da seta de entrada está fora desse quadrado, a grade não representa essa fundamental de modo único; a seta ciano mostra a posição de frequência menor que aparece no resultado." },
    page_geometric: { title: "Moiré geométrico: como usar esta página", body: "Compare os três canvases da esquerda para a direita: a Grade 1 é a referência fixa, a Grade 2 é o padrão que você altera e o padrão combinado mostra a superposição. Comece com ondas senoidais. Deixe os períodos quase iguais ou use períodos iguais com pequeno ângulo relativo; os dois casos criam um envelope amplo de Moiré. O período estimado resume a diferença entre as frequências fundamentais. Esta página estuda geometria de sobreposição, não amostragem; a superfície 3D opcional é apenas outra vista do mesmo padrão combinado." },
    page_sampling: { title: "Amostragem e aliasing: como usar esta página", body: "Esta página começa com um campo periódico contínuo e depois o representa em uma grade finita de amostras. Compare Campo contínuo, Saída amostrada e Espaço de frequências. Com a grade em 96 por 96, experimente 40 ciclos/campo e depois 70 ciclos/campo; o segundo ultrapassa Nyquist e dobra para uma frequência aparente menor. Mude o ângulo para ver o dobramento bidimensional, o desfoque para reduzir altas frequências antes da amostragem e o ruído para distinguir um alias estruturado de uma variação." },
    page_theory: { title: "Teoria: como ler esta página", body: "Os três primeiros cartões definem as ideias centrais: Moiré, aliasing e frequência de Nyquist. As lições numeradas avançam do período e da frequência espacial para a geometria de sobreposição, vetores bidimensionais, amostragem, exemplos reais e limites do modelo. Use as fórmulas compactas como mapas e retorne às páginas interativas para testar uma previsão por vez. Neste laboratório, f_vec(...) significa um vetor de frequência espacial e todas as unidades são unidades didáticas de exibição." },
  },
};

const theoryLessons = {
  en: [
    {
      title: "Start with the vocabulary",
      paragraphs: [
        "A grating is a pattern that repeats in space. Its period p is the spacing between repeats, while spatial frequency f counts repetitions per unit distance. They are reciprocals: decreasing p raises f.",
        "This lab measures periods in display pixels and frequencies in cycles across the displayed field. Those are model units, chosen so relationships are easy to inspect rather than to represent a specific instrument.",
        "A cycle per field of view (cycles/FOV) is one full repetition measured across the complete displayed width. For a sinusoid, one cycle runs from a bright peak to the next bright peak. A value of 70 cycles/FOV therefore means 70 full bright-to-bright repetitions across the field.",
      ],
      formulas: ["f = 1 / p", "g(x) = 0.5 + 0.5 cos(2*pi*f*x + phi)"],
      bullets: ["Use the sinusoidal waveform first: it contains one fundamental spatial frequency.", "Switch to binary lines only after the basic effect is clear; sharp edges introduce harmonics."],
    },
    {
      title: "Why a Moiré envelope appears",
      paragraphs: [
        "Moiré is a new, large-scale visible pattern that appears when two repeated structures overlap but are not quite the same. Neither pattern has to contain the broad bands by itself: they emerge from the small mismatch between the two spacings, directions, or both.",
        "When similar gratings are superposed, their fast stripes coexist with a much slower envelope. For aligned sinusoidal gratings, the slow scale is set by the difference between spatial frequencies. A tiny difference therefore produces a very large visible period, which is why Moiré can make a subtle mismatch obvious.",
        "The word interference is used here in the broad visual sense of superposition. This simulation combines displayed patterns; it does not model coherent wave interference, propagation, polarization, or a particular optical path. It is a geometric spatial-pattern model.",
      ],
      formulas: ["f_M = |f_1 - f_2|", "p_M = 1 / f_M", "cos(a) cos(b) = 0.5[cos(a - b) + cos(a + b)]"],
      callout: "Classroom experiment: set the angle to 0 degrees, use sinusoidal gratings, and move Grid 2 from 14 px toward 15 px. Watch the fast stripes retain their scale while the envelope broadens.",
    },
    {
      title: "Rotation makes the problem two-dimensional",
      paragraphs: [
        "A grating has both a magnitude and a direction, so spatial frequency is best represented as a vector. Grid 1 is the reference direction in this lab; the relative-angle control rotates the vector for Grid 2.",
        "The Moiré vector is their difference. Thus, equal periods do not guarantee the absence of Moiré: a small angular mismatch alone produces a nonzero vector difference. In the formulas below, f_vec(...) means a spatial-frequency vector.",
      ],
      formulas: ["f_vec(i) = (cos(theta_i)/p_i, sin(theta_i)/p_i)", "f_vec(M) = f_vec(1) - f_vec(2)", "for equal f and small theta: f_M approx f*theta (theta in radians)"],
      callout: "Experiment: set both periods to 14 px, then move the angle slowly away from 0 degrees. This isolates the contribution of direction.",
    },
    {
      title: "Sampling and the Nyquist frequency",
      paragraphs: [
        "Sampling means measuring or storing a continuous pattern only at regularly spaced locations. The sampling grid has a sampling frequency f_s: how many sample positions occur over the displayed field. Everything between those positions must be inferred from the samples.",
        "The Nyquist frequency f_N is half the sampling frequency. It is the boundary between fundamentals that an ideal regular grid can represent uniquely and faster fundamentals that have indistinguishable sampled versions. Saying 'Nyquist is half the sampling frequency' is not just a rule to memorize: it is the point where there are only two samples per cycle.",
      ],
      formulas: ["f_N = f_s / 2", "at f_N: 2 samples per cycle"],
      callout: "Experiment: keep the sampling grid at 96 × 96 and compare 40 cycles/FOV with 48 cycles/FOV. Both are at or below the displayed Nyquist boundary before you test a faster pattern.",
    },
    {
      title: "Aliasing: why false patterns appear",
      paragraphs: [
        "Aliasing is the false lower-frequency pattern created when a frequency above the Nyquist limit is sampled. The crucial idea is ambiguity: the grid records the same sequence of sample values for more than one possible continuous pattern. It cannot tell which pattern existed between sample positions.",
        "The reconstruction therefore displays a lower frequency called the alias. Spatially, fine stripes can appear as wider stripes, change their apparent direction, or create broad ripples. In this lab, the red/orange vector is the original frequency and the cyan vector is its folded alias.",
        "In two dimensions, the horizontal and vertical components fold independently. For that reason, changing only the signal angle can change the apparent result even when the total input frequency stays fixed. Fine woven fabric, printed dot patterns, and close repeated lines in a photograph can all reveal this effect after sampling or resizing.",
        "Curiosity: the wagon-wheel illusion in a film or television sequence is a time-domain cousin of spatial aliasing. A rotating wheel is sampled by individual frames and can appear to slow down or reverse. The mechanism is analogous, but this page focuses on patterns across space rather than motion across time.",
      ],
      formulas: ["f_alias = f - m*f_s", "choose integer m so f_alias lies near [-f_s/2, f_s/2]"],
      bullets: ["Increase the sampling density to move the Nyquist boundary outward.", "Apply low-pass filtering before sampling to reduce frequencies that would fold.", "Change the spacing or relative angle of repeated patterns when an unwanted alias is visible."],
      callout: "Experiment: keep the grid at 96 × 96. Compare 40 cycles/FOV with 70 cycles/FOV, then rotate the 70-cycle field and inspect how the red/orange and cyan vectors change in Frequency space.",
    },
    {
      title: "Read the controls as a scientific experiment",
      paragraphs: [
        "Change one variable at a time. The three geometric canvases separate the two inputs from their combined pattern, while the sampling page separates the continuous field, sampled reconstruction, and frequency-space interpretation.",
        "The estimated Moiré period uses the fundamental frequency vectors. It is most direct for sinusoidal gratings; binary gratings can show extra features because their harmonics also interact.",
      ],
      bullets: ["State a hypothesis before moving a slider: for example, smaller frequency difference should make a broader envelope.", "Use the 3D view as a secondary visual aid, then confirm the same conclusion in the 2D combined pattern.", "Record the settings used for any screenshot or classroom discussion."],
    },
    {
      title: "Practical contexts and ways to avoid unwanted patterns",
      paragraphs: [
        "Moiré can be useful when a broad envelope makes a small mismatch visible, for example in alignment demonstrations, patterned materials, graphic design, and teaching spatial-frequency ideas. In those cases the pattern is information.",
        "On television, a presenter wearing fine stripes, a patterned fabric, or an LED wall can develop moving-looking ripples or broad bands. The scene pattern and the television production/display sampling grids can be close enough to interact. A related time-domain effect is the wagon-wheel illusion, where rotation appears slower or reversed because frames sample motion too sparsely.",
        "On a phone or computer screen, fine fabric, herringbone textures, thin repeated lines, or a rescaled graphic can shimmer or change as you scroll and zoom. The display pixel lattice and the repeated content compete at different scales. A photograph of woven fabric, printed halftone dots, or a mesh can similarly show false colored or wavy bands after being recorded and resized.",
        "It is unwanted when repeated structures create distracting false bands in printed material, fabric, display graphics, or digitized patterns. The goal is to prevent close competing frequencies from becoming visible at the final scale.",
      ],
      bullets: ["Avoid nearly matched repeated spacings or angles when the visual result must be uniform.", "Filter high spatial frequencies before resampling; this trades some detail for a lower aliasing risk.", "Change the orientation, spacing, or sampling density, then evaluate the actual final scale rather than only a magnified preview."],
    },
    {
      title: "Useful cautions and curiosities",
      paragraphs: [
        "A broad Moiré envelope does not mean the underlying stripes are broad; it often means two high spatial frequencies differ by only a small amount. That scale separation is why the effect can be surprisingly sensitive to tiny adjustments.",
        "Aliasing is deterministic for a given sampled pattern and grid, not random. Noise can obscure it, but does not create the underlying frequency fold. The lab deliberately exposes these relationships instead of claiming calibrated measurement results.",
        "Curiosity: color printing uses several angled dot screens. Specific angle choices help prevent their repeated patterns from creating a visible color Moiré. The same basic idea appears whenever two regular lattices are overlaid or one is resampled.",
      ],
      bullets: ["If the two gratings are identical and aligned, the ideal fundamental difference is zero; the estimated period is shown as infinite.", "A binary pattern can alias through harmonics even if its fundamental is below Nyquist.", "Changing phase moves a pattern but does not change the underlying spatial-frequency vector."],
    },
  ],
  pt: [
    {
      title: "Comece pelo vocabulário",
      paragraphs: [
        "Uma grade é um padrão que se repete no espaço. Seu período p é a distância entre repetições, enquanto a frequência espacial f conta as repetições por unidade de distância. São grandezas recíprocas: diminuir p aumenta f.",
        "Este laboratório mede períodos em pixels de exibição e frequências em ciclos ao longo do campo mostrado. São unidades de modelo, escolhidas para tornar as relações fáceis de observar e não para representar um instrumento específico.",
        "Um ciclo por campo de visão (ciclos/campo) é uma repetição completa medida ao longo de toda a largura exibida. Para uma senoide, um ciclo vai de um pico claro ao próximo pico claro. Portanto, 70 ciclos/campo significa 70 repetições completas de pico a pico ao longo do campo.",
      ],
      formulas: ["f = 1 / p", "g(x) = 0.5 + 0.5 cos(2*pi*f*x + phi)"],
      bullets: ["Comece com a onda senoidal: ela contém uma frequência espacial fundamental.", "Mude para linhas binárias apenas depois de entender o efeito básico; bordas abruptas introduzem harmônicos."],
    },
    {
      title: "Por que surge um envelope de Moiré",
      paragraphs: [
        "Moiré é um novo padrão amplo e visível que aparece quando duas estruturas repetitivas se sobrepõem, mas não são exatamente iguais. Nenhum dos padrões precisa conter sozinho as faixas largas: elas surgem da pequena diferença entre os espaçamentos, as direções ou ambos.",
        "Quando grades parecidas são sobrepostas, suas faixas rápidas coexistem com um envelope muito mais lento. Para grades senoidais alinhadas, a escala lenta é definida pela diferença entre as frequências espaciais. Uma diferença pequena, portanto, produz um período visível muito grande; por isso, Moiré torna evidente um desalinhamento sutil.",
        "A palavra interferência é usada aqui no sentido visual amplo de superposição. A simulação combina padrões exibidos; ela não modela interferência coerente de ondas, propagação, polarização ou um caminho óptico específico. É um modelo geométrico de padrões espaciais.",
      ],
      formulas: ["f_M = |f_1 - f_2|", "p_M = 1 / f_M", "cos(a) cos(b) = 0.5[cos(a - b) + cos(a + b)]"],
      callout: "Experimento em sala: ajuste o ângulo para 0 graus, use grades senoidais e mova a Grade 2 de 14 px em direção a 15 px. Observe que as faixas rápidas mantêm a escala, enquanto o envelope se alarga.",
    },
    {
      title: "A rotação torna o problema bidimensional",
      paragraphs: [
        "Uma grade tem módulo e direção; por isso, sua frequência espacial é bem representada por um vetor. Neste laboratório, a Grade 1 é a direção de referência e o controle de ângulo relativo gira o vetor da Grade 2.",
        "O vetor de Moiré é a diferença entre eles. Logo, períodos iguais não garantem ausência de Moiré: uma pequena diferença angular já produz uma diferença vetorial não nula. Nas fórmulas abaixo, f_vec(...) significa um vetor de frequência espacial.",
      ],
      formulas: ["f_vec(i) = (cos(theta_i)/p_i, sin(theta_i)/p_i)", "f_vec(M) = f_vec(1) - f_vec(2)", "para f iguais e theta pequeno: f_M approx f*theta (theta em radianos)"],
      callout: "Experimento: ajuste ambos os períodos para 14 px e mova lentamente o ângulo para fora de 0 graus. Assim você isola a contribuição da direção.",
    },
    {
      title: "Amostragem e frequência de Nyquist",
      paragraphs: [
        "Amostragem significa medir ou guardar um padrão contínuo somente em posições regularmente espaçadas. A grade possui uma frequência de amostragem f_s: quantas posições de amostra existem ao longo do campo exibido. Tudo que está entre essas posições precisa ser inferido a partir das amostras.",
        "A frequência de Nyquist f_N é a metade da frequência de amostragem. Ela é a fronteira entre fundamentais que uma grade regular ideal representa de forma única e fundamentais mais rápidos que possuem versões amostradas indistinguíveis. Dizer que Nyquist é metade da frequência de amostragem não é apenas uma regra: nesse ponto existem apenas duas amostras por ciclo.",
      ],
      formulas: ["f_N = f_s / 2", "em f_N: 2 amostras por ciclo"],
      callout: "Experimento: mantenha a grade em 96 × 96 e compare 40 ciclos/campo com 48 ciclos/campo. Ambos estão na fronteira de Nyquist ou abaixo dela antes de você testar um padrão mais rápido.",
    },
    {
      title: "Aliasing: por que surgem padrões falsos",
      paragraphs: [
        "Aliasing é o padrão falso de frequência menor criado quando uma frequência acima do limite de Nyquist é amostrada. A ideia central é a ambiguidade: a grade registra a mesma sequência de valores de amostra para mais de um padrão contínuo possível. Ela não consegue saber qual padrão existia entre as posições de amostra.",
        "A reconstrução, então, mostra uma frequência menor chamada alias. No espaço, faixas finas podem parecer mais largas, mudar de direção aparente ou formar ondulações amplas. Neste laboratório, o vetor vermelho-alaranjado é a frequência original e o vetor ciano é seu alias dobrado.",
        "Em duas dimensões, as componentes horizontal e vertical se dobram de forma independente. Por isso, mudar apenas o ângulo do sinal pode alterar o resultado aparente mesmo que a frequência total de entrada permaneça igual. Tecido fino, pontos de impressão e linhas repetidas próximas em uma fotografia podem revelar esse efeito depois de amostrados ou redimensionados.",
        "Curiosidade: a ilusão da roda de carroça em uma sequência de filme ou televisão é uma parente temporal do aliasing espacial. A roda em rotação é amostrada por quadros individuais e pode parecer desacelerar ou inverter. O mecanismo é análogo, mas esta página trata de padrões no espaço, e não de movimento no tempo.",
      ],
      formulas: ["f_alias = f - m*f_s", "escolha o inteiro m para manter f_alias perto de [-f_s/2, f_s/2]"],
      bullets: ["Aumente a densidade de amostragem para mover a fronteira de Nyquist para fora.", "Aplique filtragem passa-baixas antes de amostrar para reduzir frequências que se dobrariam.", "Mude o espaçamento ou o ângulo relativo de padrões repetitivos quando um alias indesejado ficar visível."],
      callout: "Experimento: mantenha a grade em 96 × 96. Compare 40 ciclos/campo com 70 ciclos/campo, gire o campo de 70 ciclos e observe como os vetores vermelho-alaranjado e ciano mudam no Espaço de frequências.",
    },
    {
      title: "Leia os controles como um experimento científico",
      paragraphs: [
        "Mude uma variável por vez. Os três canvases geométricos separam as duas entradas do padrão combinado; a página de amostragem separa o campo contínuo, a reconstrução amostrada e a interpretação no espaço de frequências.",
        "O período estimado de Moiré usa os vetores de frequência fundamental. Ele é mais direto para grades senoidais; grades binárias podem mostrar estruturas extras porque seus harmônicos também interagem.",
      ],
      bullets: ["Formule uma hipótese antes de mover uma barra: por exemplo, uma diferença de frequência menor deve gerar um envelope mais largo.", "Use a visualização 3D como ajuda secundária e confirme a mesma conclusão no padrão combinado 2D.", "Registre as configurações usadas em qualquer imagem ou discussão em sala."],
    },
    {
      title: "Contextos práticos e como evitar padrões indesejados",
      paragraphs: [
        "O Moiré pode ser útil quando um envelope amplo torna visível uma pequena diferença, por exemplo em demonstrações de alinhamento, materiais padronizados, design gráfico e ensino de frequência espacial. Nesses casos, o padrão é informação.",
        "Na televisão, a roupa de um apresentador com listras finas, um tecido padronizado ou um painel de LED pode ganhar ondulações ou faixas largas que parecem se mover. O padrão da cena e as grades de amostragem e exibição podem interagir. Um efeito temporal relacionado é a ilusão da roda de carroça: a rotação parece mais lenta ou invertida porque os quadros amostram o movimento de modo esparso.",
        "Na tela de celular ou computador, tecido fino, texturas espinha de peixe, linhas repetidas ou um gráfico redimensionado podem cintilar e mudar ao rolar ou ampliar. A malha de pixels da tela compete com o conteúdo repetitivo em escalas diferentes. Uma foto de tecido, de pontos de impressão ou de uma malha pode mostrar faixas falsas coloridas ou onduladas depois de registrada e redimensionada.",
        "Ele é indesejado quando estruturas repetidas criam faixas falsas e distraem em material impresso, tecidos, gráficos de tela ou padrões digitalizados. O objetivo então é impedir que frequências concorrentes próximas fiquem visíveis na escala final.",
      ],
      bullets: ["Evite espaçamentos ou ângulos repetitivos quase iguais quando o resultado visual precisa ser uniforme.", "Filtre altas frequências espaciais antes de reamostrar; isso troca parte do detalhe por menor risco de aliasing.", "Altere orientação, espaçamento ou densidade de amostragem e avalie a escala final real, não somente uma prévia ampliada."],
    },
    {
      title: "Cuidados e curiosidades úteis",
      paragraphs: [
        "Um envelope de Moiré amplo não significa que as faixas de origem são amplas; muitas vezes significa que duas frequências espaciais altas diferem muito pouco. Essa separação de escalas explica a sensibilidade do efeito a ajustes pequenos.",
        "Para um padrão e uma grade de amostragem dados, o aliasing é determinístico, não aleatório. O ruído pode escondê-lo, mas não cria a dobra de frequência. O laboratório expõe essas relações sem afirmar resultados de medição calibrada.",
        "Curiosidade: a impressão colorida usa várias retículas de pontos em ângulos escolhidos. Essas escolhas ajudam a impedir que os padrões repetidos produzam um Moiré colorido visível. A mesma ideia básica aparece sempre que duas malhas regulares são sobrepostas ou uma delas é reamostrada.",
      ],
      bullets: ["Se as duas grades forem idênticas e alinhadas, a diferença fundamental ideal é zero; o período estimado aparece como infinito.", "Um padrão binário pode sofrer aliasing por seus harmônicos mesmo se a fundamental estiver abaixo de Nyquist.", "Mudar a fase desloca um padrão, mas não altera seu vetor de frequência espacial."],
    },
  ],
};

let lastHelpButton = null;
let openHelpKey = null;

function getHelpEntry(key) {
  return helpContent[state.language][key];
}

function refreshHelpButtons() {
  document.querySelectorAll(".help-button, .page-guide-button").forEach((button) => {
    const entry = getHelpEntry(button.dataset.helpKey);
    const label = `${tr("help_for")}: ${entry.title}`;
    button.setAttribute("aria-label", label);
    button.title = label;
  });
  if (openHelpKey) showHelp(openHelpKey, lastHelpButton, false);
}

function showHelp(key, sourceButton, moveFocus = true) {
  const entry = getHelpEntry(key);
  if (!entry) return;
  lastHelpButton = sourceButton ?? lastHelpButton;
  openHelpKey = key;
  $("help-title").textContent = entry.title;
  $("help-body").textContent = entry.body;
  $("help-popover").hidden = false;
  if (moveFocus) $("help-close").focus();
}

function closeHelp(returnFocus = true) {
  if ($("help-popover").hidden) return;
  $("help-popover").hidden = true;
  openHelpKey = null;
  if (returnFocus && lastHelpButton) lastHelpButton.focus();
}

function createHelpButton(key) {
  const button = document.createElement("button");
  button.className = "help-button";
  button.type = "button";
  button.dataset.helpKey = key;
  button.setAttribute("aria-haspopup", "dialog");
  button.textContent = "?";
  button.addEventListener("click", () => showHelp(key, button));
  return button;
}

function addHelpToControl(controlId, key) {
  const label = document.querySelector(`label[for="${controlId}"]`);
  if (!label || label.parentElement.classList.contains("control-label")) return;
  const wrapper = document.createElement("div");
  wrapper.className = "control-label";
  label.replaceWith(wrapper);
  wrapper.append(label, createHelpButton(key));
}

function initializeLearningGuides() {
  const controlHelp = {
    "grid1-period": "grid1_period",
    "grid2-period": "grid2_period",
    "relative-angle": "relative_angle",
    "grid-waveform": "grid_waveform",
    "combination-mode": "combination_mode",
    "signal-frequency": "signal_frequency",
    "signal-angle": "signal_angle",
    "signal-phase": "signal_phase",
    "sampling-density": "sampling_density",
    "sampling-blur": "sampling_blur",
    "sampling-noise": "sampling_noise",
    "sampling-waveform": "sampling_waveform",
  };
  Object.entries(controlHelp).forEach(([id, key]) => addHelpToControl(id, key));
  const threeHelp = createHelpButton("three_view");
  $("three-toggle").insertAdjacentElement("afterend", threeHelp);
  document.querySelectorAll(".inline-help-button").forEach((button) => {
    button.addEventListener("click", () => showHelp(button.dataset.helpKey, button));
  });
  document.querySelectorAll(".page-guide-button").forEach((button) => {
    button.addEventListener("click", () => showHelp(button.dataset.helpKey, button));
  });
  $("help-close").addEventListener("click", () => closeHelp());
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeHelp(); });
  document.addEventListener("click", (event) => {
    if (!$("help-popover").hidden && !event.target.closest(".help-popover") && !event.target.closest(".help-button") && !event.target.closest(".page-guide-button")) closeHelp(false);
  });
  refreshHelpButtons();
}

function renderTheory() {
  const target = $("theory-lessons");
  target.replaceChildren();
  theoryLessons[state.language].forEach((lesson, index) => {
    const article = document.createElement("article");
    article.className = "theory-lesson";
    const header = document.createElement("div");
    header.className = "theory-lesson-header";
    const number = document.createElement("span");
    number.className = "lesson-number";
    number.textContent = String(index + 1).padStart(2, "0");
    const heading = document.createElement("h3");
    heading.textContent = lesson.title;
    header.append(number, heading);
    article.append(header);
    lesson.paragraphs.forEach((paragraph) => {
      const element = document.createElement("p");
      element.textContent = paragraph;
      article.append(element);
    });
    if (lesson.formulas) {
      const formulas = document.createElement("div");
      formulas.className = "lesson-formulas";
      lesson.formulas.forEach((formula) => {
        const element = document.createElement("code");
        element.textContent = formula;
        formulas.append(element);
      });
      article.append(formulas);
    }
    if (lesson.bullets) {
      const list = document.createElement("ul");
      list.className = "lesson-list";
      lesson.bullets.forEach((item) => {
        const element = document.createElement("li");
        element.textContent = item;
        list.append(element);
      });
      article.append(list);
    }
    if (lesson.callout) {
      const callout = document.createElement("p");
      callout.className = "theory-callout";
      callout.textContent = lesson.callout;
      article.append(callout);
    }
    target.append(article);
  });
}

function setCanvasPixels(canvas, values, colorize = false) {
  const context = canvas.getContext("2d", { alpha: false });
  const size = canvas.width;
  const image = context.createImageData(size, size);
  for (let i = 0; i < values.length; i += 1) {
    const value = Math.max(0, Math.min(1, values[i]));
    const p = i * 4;
    if (colorize) {
      image.data[p] = Math.round(32 + value * 155);
      image.data[p + 1] = Math.round(58 + value * 172);
      image.data[p + 2] = Math.round(93 + (1 - value) * 115);
    } else {
      const shade = Math.round(value * 255);
      image.data[p] = shade;
      image.data[p + 1] = shade;
      image.data[p + 2] = shade;
    }
    image.data[p + 3] = 255;
  }
  context.putImageData(image, 0, 0);
}

function gratingValue(x, y, period, angleDeg, waveform) {
  const angle = angleDeg * Math.PI / 180;
  const phase = 2 * Math.PI * (x * Math.cos(angle) + y * Math.sin(angle)) / period;
  if (waveform === "sinusoidal") return 0.5 + 0.5 * Math.cos(phase);
  return ((phase / (2 * Math.PI)) % 1 + 1) % 1 < 0.5 ? 1 : 0;
}

function makeGrating(size, period, angleDeg, waveform) {
  const values = new Float32Array(size * size);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      values[y * size + x] = gratingValue(x, y, period, angleDeg, waveform);
    }
  }
  return values;
}

function estimateMoirePeriod(period1, period2, angleDeg) {
  const f1 = 1 / period1;
  const f2 = 1 / period2;
  const angle = angleDeg * Math.PI / 180;
  const difference = Math.hypot(f1 - f2 * Math.cos(angle), -f2 * Math.sin(angle));
  return difference < 1e-12 ? Infinity : 1 / difference;
}

function renderGeometry() {
  const { period1, period2, angle, waveform, combination } = state.geometry;
  const size = $("grid1-canvas").width;
  const grid1 = makeGrating(size, period1, 0, waveform);
  const grid2 = makeGrating(size, period2, angle, waveform);
  const combined = new Float32Array(size * size);
  for (let i = 0; i < combined.length; i += 1) {
    combined[i] = combination === "average" ? (grid1[i] + grid2[i]) / 2 : combination === "minimum" ? Math.min(grid1[i], grid2[i]) : grid1[i] * grid2[i];
  }
  setCanvasPixels($("grid1-canvas"), grid1);
  setCanvasPixels($("grid2-canvas"), grid2);
  setCanvasPixels($("combined-canvas"), combined);
  setControlNumberValue("grid1-period", period1.toFixed(1));
  setControlNumberValue("grid2-period", period2.toFixed(1));
  setControlNumberValue("relative-angle", angle.toFixed(1));
  const moire = estimateMoirePeriod(period1, period2, angle);
  $("moire-period").textContent = Number.isFinite(moire) ? `${moire.toFixed(1)} px` : "∞";
  if (threeState.initialized && threeState.visible) updateThreeSurface();
}

function makeField(size, frequency, angleDeg, phaseDeg, waveform) {
  const field = new Float32Array(size * size);
  const angle = angleDeg * Math.PI / 180;
  const phaseOffset = phaseDeg * Math.PI / 180;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const nx = (x + .5) / size - .5;
      const ny = (y + .5) / size - .5;
      const phase = 2 * Math.PI * frequency * (nx * cos + ny * sin) + phaseOffset;
      field[y * size + x] = waveform === "binary" ? (Math.cos(phase) >= 0 ? 1 : 0) : .5 + .5 * Math.cos(phase);
    }
  }
  return field;
}

function boxBlur(source, size, radius) {
  if (radius < 1) return source;
  const horizontal = new Float32Array(source.length);
  const output = new Float32Array(source.length);
  for (let y = 0; y < size; y += 1) {
    let sum = 0;
    for (let x = -radius; x <= radius; x += 1) sum += source[y * size + Math.max(0, Math.min(size - 1, x))];
    for (let x = 0; x < size; x += 1) {
      horizontal[y * size + x] = sum / (radius * 2 + 1);
      sum += source[y * size + Math.min(size - 1, x + radius + 1)] - source[y * size + Math.max(0, x - radius)];
    }
  }
  for (let x = 0; x < size; x += 1) {
    let sum = 0;
    for (let y = -radius; y <= radius; y += 1) sum += horizontal[Math.max(0, Math.min(size - 1, y)) * size + x];
    for (let y = 0; y < size; y += 1) {
      output[y * size + x] = sum / (radius * 2 + 1);
      sum += horizontal[Math.min(size - 1, y + radius + 1) * size + x] - horizontal[Math.max(0, y - radius) * size + x];
    }
  }
  return output;
}

function deterministicNoise(row, col) {
  const value = Math.sin(row * 12.9898 + col * 78.233) * 43758.5453;
  return (value - Math.floor(value)) - .5;
}

function drawSampledOutput(canvas, field, density, noise) {
  const size = canvas.width;
  const values = new Float32Array(size * size);
  for (let y = 0; y < size; y += 1) {
    const sampleY = Math.min(density - 1, Math.floor(y * density / size));
    for (let x = 0; x < size; x += 1) {
      const sampleX = Math.min(density - 1, Math.floor(x * density / size));
      const sourceX = Math.min(size - 1, Math.floor((sampleX + .5) * size / density));
      const sourceY = Math.min(size - 1, Math.floor((sampleY + .5) * size / density));
      values[y * size + x] = field[sourceY * size + sourceX] + noise * deterministicNoise(sampleY, sampleX);
    }
  }
  setCanvasPixels(canvas, values, true);
}

function wrapFrequency(frequency, samplingFrequency) {
  return ((frequency + samplingFrequency / 2) % samplingFrequency + samplingFrequency) % samplingFrequency - samplingFrequency / 2;
}

function drawFrequencySpace(aliasX, aliasY, inputX, inputY, nyquist) {
  const canvas = $("frequency-canvas");
  const context = canvas.getContext("2d");
  const size = canvas.width;
  const limit = Math.max(nyquist * 1.25, Math.abs(inputX) * 1.1, Math.abs(inputY) * 1.1, 1);
  const mapX = (value) => size / 2 + value / limit * size * .42;
  const mapY = (value) => size / 2 - value / limit * size * .42;
  context.clearRect(0, 0, size, size);
  context.fillStyle = "#f5f8fc";
  context.fillRect(0, 0, size, size);
  context.fillStyle = "rgba(31, 143, 166, .13)";
  context.fillRect(mapX(-nyquist), mapY(nyquist), mapX(nyquist) - mapX(-nyquist), mapY(-nyquist) - mapY(nyquist));
  context.strokeStyle = "#a9b7c9";
  context.lineWidth = 1;
  context.beginPath(); context.moveTo(0, size / 2); context.lineTo(size, size / 2); context.moveTo(size / 2, 0); context.lineTo(size / 2, size); context.stroke();
  const arrow = (x, y, color) => {
    const endX = mapX(x), endY = mapY(y), startX = size / 2, startY = size / 2;
    const theta = Math.atan2(endY - startY, endX - startX);
    context.strokeStyle = color; context.fillStyle = color; context.lineWidth = 4;
    context.beginPath(); context.moveTo(startX, startY); context.lineTo(endX, endY); context.stroke();
    context.beginPath(); context.moveTo(endX, endY); context.lineTo(endX - 10 * Math.cos(theta - .45), endY - 10 * Math.sin(theta - .45)); context.lineTo(endX - 10 * Math.cos(theta + .45), endY - 10 * Math.sin(theta + .45)); context.closePath(); context.fill();
  };
  arrow(inputX, inputY, "#e85c47");
  arrow(aliasX, aliasY, "#1f8fa6");
}

function renderSampling() {
  const { frequency, angle, phase, density, blur, noise, waveform } = state.sampling;
  const size = $("field-canvas").width;
  const field = makeField(size, frequency, angle, phase, waveform);
  const softened = boxBlur(field, size, Math.round(blur));
  setCanvasPixels($("field-canvas"), softened, true);
  drawSampledOutput($("sampled-canvas"), softened, density, noise);
  const radians = angle * Math.PI / 180;
  const inputX = frequency * Math.cos(radians);
  const inputY = frequency * Math.sin(radians);
  const aliasX = wrapFrequency(inputX, density);
  const aliasY = wrapFrequency(inputY, density);
  const aliasMagnitude = Math.hypot(aliasX, aliasY);
  const nyquist = density / 2;
  $("input-frequency").textContent = `${frequency.toFixed(1)} cycles/FOV`;
  $("alias-frequency").textContent = `${aliasMagnitude.toFixed(1)} cycles/FOV`;
  $("nyquist-frequency").textContent = `${nyquist.toFixed(1)} cycles/FOV`;
  const aliased = Math.abs(inputX) > nyquist || Math.abs(inputY) > nyquist;
  const status = $("alias-status");
  status.textContent = tr(aliased ? "status_alias" : "status_safe");
  status.classList.toggle("is-safe", !aliased);
  drawFrequencySpace(aliasX, aliasY, inputX, inputY, nyquist);
  setControlNumberValue("signal-frequency", frequency.toFixed(0));
  setControlNumberValue("signal-angle", angle.toFixed(1));
  setControlNumberValue("signal-phase", phase.toFixed(0));
  setControlNumberValue("sampling-density", String(density));
  setControlNumberValue("sampling-blur", blur.toFixed(1));
  setControlNumberValue("sampling-noise", noise.toFixed(2));
}

let geometryFrame = null;
let samplingFrame = null;
function scheduleGeometry() { if (!geometryFrame) geometryFrame = requestAnimationFrame(() => { geometryFrame = null; renderGeometry(); }); }
function scheduleSampling() { if (!samplingFrame) samplingFrame = requestAnimationFrame(() => { samplingFrame = null; renderSampling(); }); }

const threeState = {
  initialized: false,
  loading: false,
  visible: false,
  scene: null,
  camera: null,
  renderer: null,
  controls: null,
  surfaceGeometry: null,
  animationFrame: null,
  resizeObserver: null,
};

function showThreeMessage(message) {
  const messageElement = document.createElement("p");
  messageElement.className = "three-fallback";
  messageElement.textContent = message;
  $("three-canvas").replaceChildren(messageElement);
}

function updateThreeToggleText() {
  const viewIsOpen = !$("three-view").hidden;
  const label = threeState.loading ? "three_loading" : viewIsOpen ? "three_toggle_close" : "three_toggle_open";
  $("three-toggle-label").textContent = tr(label);
  $("three-toggle").setAttribute("aria-pressed", String(viewIsOpen));
}

function resizeThreeRenderer() {
  if (!threeState.initialized) return;
  const container = $("three-canvas");
  const width = Math.max(1, container.clientWidth);
  const height = Math.max(1, container.clientHeight);
  threeState.camera.aspect = width / height;
  threeState.camera.updateProjectionMatrix();
  threeState.renderer.setSize(width, height, false);
}

function renderThreeScene() {
  if (!threeState.initialized || !threeState.visible) {
    threeState.animationFrame = null;
    return;
  }
  threeState.controls.update();
  threeState.renderer.render(threeState.scene, threeState.camera);
  threeState.animationFrame = requestAnimationFrame(renderThreeScene);
}

function startThreeRender() {
  if (threeState.animationFrame === null) threeState.animationFrame = requestAnimationFrame(renderThreeScene);
}

function stopThreeRender() {
  if (threeState.animationFrame !== null) cancelAnimationFrame(threeState.animationFrame);
  threeState.animationFrame = null;
}

function combinedGratingValue(x, y) {
  const { period1, period2, angle, waveform, combination } = state.geometry;
  const first = gratingValue(x, y, period1, 0, waveform);
  const second = gratingValue(x, y, period2, angle, waveform);
  if (combination === "average") return (first + second) / 2;
  if (combination === "minimum") return Math.min(first, second);
  return first * second;
}

function updateThreeSurface() {
  if (!threeState.initialized) return;
  const positions = threeState.surfaceGeometry.attributes.position;
  const colors = threeState.surfaceGeometry.attributes.color;
  const segments = Math.round(Math.sqrt(positions.count)) - 1;
  for (let row = 0; row <= segments; row += 1) {
    for (let column = 0; column <= segments; column += 1) {
      const index = row * (segments + 1) + column;
      const value = combinedGratingValue(column / segments * 256, row / segments * 256);
      positions.setZ(index, .08 + value * 1.05);
      colors.setXYZ(index, .06 + value * .88, .15 + value * .54, .28 + (1 - value) * .42);
    }
  }
  positions.needsUpdate = true;
  colors.needsUpdate = true;
  threeState.surfaceGeometry.computeVertexNormals();
}

async function initializeThreeScene() {
  if (threeState.initialized) return true;
  const container = $("three-canvas");
  try {
    const [THREE, { OrbitControls }] = await Promise.all([
      import("three"),
      import("three/addons/controls/OrbitControls.js"),
    ]);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0a1421");
    scene.fog = new THREE.Fog("#0a1421", 9, 18);

    const camera = new THREE.PerspectiveCamera(35, 1, .1, 40);
    camera.position.set(6.8, -6.4, 6.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.setAttribute("role", "img");
    renderer.domElement.setAttribute("aria-label", tr("three_canvas_label"));
    container.replaceChildren(renderer.domElement);

    const surfaceGeometry = new THREE.PlaneGeometry(6, 6, 96, 96);
    surfaceGeometry.setAttribute("color", new THREE.BufferAttribute(new Float32Array(surfaceGeometry.attributes.position.count * 3), 3));
    const surface = new THREE.Mesh(surfaceGeometry, new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: .44, metalness: .12 }));
    scene.add(surface);

    const grid = new THREE.GridHelper(6, 12, "#2e7d9d", "#18384f");
    grid.rotation.x = Math.PI / 2;
    grid.position.z = .01;
    scene.add(grid);
    scene.add(new THREE.HemisphereLight("#a6e5ff", "#07111d", 2.2));
    const keyLight = new THREE.DirectionalLight("#ffffff", 2.4);
    keyLight.position.set(3, -4, 8);
    scene.add(keyLight);
    const accentLight = new THREE.PointLight("#f2a34b", 24, 12, 2);
    accentLight.position.set(-3.5, 2, 4);
    scene.add(accentLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 4.7;
    controls.maxDistance = 13;
    controls.target.set(0, 0, .45);

    threeState.scene = scene;
    threeState.camera = camera;
    threeState.renderer = renderer;
    threeState.controls = controls;
    threeState.surfaceGeometry = surfaceGeometry;
    threeState.initialized = true;
    updateThreeSurface();
    resizeThreeRenderer();
    if (window.ResizeObserver) {
      threeState.resizeObserver = new ResizeObserver(resizeThreeRenderer);
      threeState.resizeObserver.observe(container);
    } else {
      window.addEventListener("resize", resizeThreeRenderer, { passive: true });
    }
    return true;
  } catch (error) {
    showThreeMessage(tr("three_fallback"));
    return false;
  }
}

async function toggleThreeView() {
  const view = $("three-view");
  if (!view.hidden) {
    threeState.visible = false;
    stopThreeRender();
    view.hidden = true;
    updateThreeToggleText();
    return;
  }

  view.hidden = false;
  if (threeState.initialized) {
    threeState.visible = true;
    updateThreeSurface();
    resizeThreeRenderer();
    startThreeRender();
    updateThreeToggleText();
    return;
  }

  if (threeState.loading) return;
  threeState.loading = true;
  updateThreeToggleText();
  showThreeMessage(tr("three_loading"));
  const didInitialize = await initializeThreeScene();
  threeState.loading = false;
  if (didInitialize && !view.hidden) {
    threeState.visible = true;
    startThreeRender();
  }
  updateThreeToggleText();
}

function applyLanguage() {
  document.documentElement.lang = state.language === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = tr(element.dataset.i18n); });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", tr(element.dataset.i18nAria));
  });
  $("language-select").value = state.language;
  $("language-quick").textContent = state.language === "en" ? "PT" : "EN";
  $("language-quick").setAttribute("aria-label", tr("switch_language"));
  $("language-quick").title = tr("switch_language");
  $("sidebar-toggle").setAttribute("aria-label", tr(state.collapsed ? "expand" : "collapse"));
  $("sidebar-toggle").title = tr(state.collapsed ? "expand" : "collapse");
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.setAttribute("aria-label", tr(button.dataset.navKey));
    button.title = tr(button.dataset.navKey);
  });
  refreshHelpButtons();
  renderTheory();
  updateThreeToggleText();
  if (threeState.initialized) threeState.renderer.domElement.setAttribute("aria-label", tr("three_canvas_label"));
  renderGeometry(); renderSampling();
}

function setPage(page) {
  state.page = page;
  document.querySelectorAll(".page").forEach((section) => { section.hidden = section.id !== `page-${page}`; });
  document.querySelectorAll(".nav-item").forEach((button) => { button.classList.toggle("is-active", button.dataset.pageTarget === page); });
  window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
}

function bindRange(id, target, property, schedule) {
  const range = $(id);
  const number = $(`${id}-number`);
  const updateFromValue = (value) => {
    if (!Number.isFinite(value)) return;
    range.value = String(value);
    const normalized = Number(range.value);
    target[property] = normalized;
    if (number) number.value = String(normalized);
    schedule();
  };
  range.addEventListener("input", (event) => updateFromValue(Number(event.target.value)));
  number.addEventListener("change", (event) => {
    const value = Number(event.target.value);
    if (Number.isFinite(value)) updateFromValue(value);
    else event.target.value = String(target[property]);
  });
}

function initialize() {
  document.querySelectorAll(".nav-item").forEach((button) => button.addEventListener("click", () => setPage(button.dataset.pageTarget)));
  $("sidebar-toggle").addEventListener("click", () => { state.collapsed = !state.collapsed; $("sidebar").classList.toggle("is-collapsed", state.collapsed); $("sidebar-toggle").setAttribute("aria-expanded", String(!state.collapsed)); applyLanguage(); });
  $("language-select").addEventListener("change", (event) => { state.language = event.target.value; applyLanguage(); });
  $("language-quick").addEventListener("click", () => { state.language = state.language === "en" ? "pt" : "en"; applyLanguage(); });
  $("three-toggle").addEventListener("click", toggleThreeView);
  bindRange("grid1-period", state.geometry, "period1", scheduleGeometry);
  bindRange("grid2-period", state.geometry, "period2", scheduleGeometry);
  bindRange("relative-angle", state.geometry, "angle", scheduleGeometry);
  $("grid-waveform").addEventListener("change", (event) => { state.geometry.waveform = event.target.value; scheduleGeometry(); });
  $("combination-mode").addEventListener("change", (event) => { state.geometry.combination = event.target.value; scheduleGeometry(); });
  bindRange("signal-frequency", state.sampling, "frequency", scheduleSampling);
  bindRange("signal-angle", state.sampling, "angle", scheduleSampling);
  bindRange("signal-phase", state.sampling, "phase", scheduleSampling);
  bindRange("sampling-density", state.sampling, "density", scheduleSampling);
  bindRange("sampling-blur", state.sampling, "blur", scheduleSampling);
  bindRange("sampling-noise", state.sampling, "noise", scheduleSampling);
  $("sampling-waveform").addEventListener("change", (event) => { state.sampling.waveform = event.target.value; scheduleSampling(); });
  initializeLearningGuides();
  applyLanguage(); setPage("geometric");
}

initialize();
