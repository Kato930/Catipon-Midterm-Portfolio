<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    {/* This line below catches everything and forces it Home if it gets lost */}
    <Route path="*" element={<Home />} /> 
  </Routes>
</Router>
