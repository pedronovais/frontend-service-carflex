import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Car, User, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Vehicle images
import fleetEconomico from "@/assets/fleet-economico.png";
import fleetIntermediario from "@/assets/fleet-intermediario.png";
import fleetUtilitarios from "@/assets/fleet-utilitarios.png";
import fleetHatch from "@/assets/fleet-hatch.png";
import fleetMoto from "@/assets/fleet-moto.png";
import orcamentoBg from "@/assets/orcamento-bg.png";

const Orcamento = () => {
  const [searchParams] = useSearchParams();
  const categoriaParam = searchParams.get("categoria");
  const { toast } = useToast();

  // Vehicle data list
  const veiculosList = [
    { id: "Econômico", image: fleetEconomico, name: "Econômico", description: "Compacto ideal para mobilidade urbana" },
    { id: "Intermediário", image: fleetIntermediario, name: "Intermediário", description: "Confortável e eficiente para deslocamentos" },
    { id: "Utilitários", image: fleetUtilitarios, name: "Utilitários", description: "SUV robusto para cargas e diferentes terrenos" },
    { id: "Hatch", image: fleetHatch, name: "Hatch", description: "Versatilidade e praticidade para o dia a dia" },
    { id: "Motos", image: fleetMoto, name: "Motos", description: "Agilidade para entregas e deslocamentos rápidos" },
  ];

  const [selectedVeiculo, setSelectedVeiculo] = useState(categoriaParam || "");

  const [formData, setFormData] = useState({
    perfil: "",
    nomeEmpresa: "",
    cnpj: "",
    nome: "",
    email: "",
    celular: "",
    comoNosEncontrou: "",
    localRetirada: "",
    dataRetirada: "",
    horarioRetirada: "",
    dataEntrega: "",
    horarioEntrega: "",
    tempoLocacao: "",
    franquias: [] as string[],
  });

  const [captcha, setCaptcha] = useState({ num1: Math.floor(Math.random() * 10), num2: Math.floor(Math.random() * 10) });
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  const horarios = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
    "17:00", "17:30", "18:00"
  ];

  const franquiasOptions = [
    "Franquia 2.000km/mês",
    "Franquia 3.000km/mês",
    "Franquia 4.000km/mês",
    "Franquia 5.000km/mês",
  ];

  const handleFranquiaChange = (franquia: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      franquias: checked 
        ? [...prev.franquias, franquia]
        : prev.franquias.filter(f => f !== franquia)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedVeiculo) {
      toast({
        title: "Selecione um veículo",
        description: "Por favor, selecione uma categoria de veículo.",
        variant: "destructive",
      });
      return;
    }

    if (parseInt(captchaAnswer) !== captcha.num1 + captcha.num2) {
      toast({
        title: "Erro no captcha",
        description: "Por favor, responda corretamente a operação matemática.",
        variant: "destructive",
      });
      return;
    }

    // Build WhatsApp message
    const message = `*PEDIDO DE ORÇAMENTO*%0A%0A` +
      `*Tipo de Locação:* ${formData.perfil}%0A` +
      `*Grupo de Veículos:* ${selectedVeiculo}%0A%0A` +
      `*DADOS DA EMPRESA*%0A` +
      `Nome da Empresa: ${formData.nomeEmpresa}%0A` +
      `CNPJ: ${formData.cnpj}%0A` +
      `Contato: ${formData.nome}%0A` +
      `E-mail: ${formData.email}%0A` +
      `Celular: ${formData.celular}%0A` +
      `Como nos encontrou: ${formData.comoNosEncontrou}%0A%0A` +
      `*DADOS DA LOCAÇÃO*%0A` +
      `Local de Retirada: ${formData.localRetirada}%0A` +
      `Data/Hora Retirada: ${formData.dataRetirada} às ${formData.horarioRetirada}%0A` +
      `Data/Hora Entrega: ${formData.dataEntrega} às ${formData.horarioEntrega}%0A` +
      `Tempo de Locação: ${formData.tempoLocacao}%0A` +
      `Franquias: ${formData.franquias.join(", ") || "Não selecionada"}`;

    window.open(`https://wa.me/5531984503693?text=${message}`, "_blank");
    
    toast({
      title: "Orçamento enviado!",
      description: "Você será redirecionado para o WhatsApp.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="pt-20 bg-secondary relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(135deg, transparent 25%, hsl(var(--accent) / 0.1) 25%, hsl(var(--accent) / 0.1) 50%, transparent 50%, transparent 75%, hsl(var(--accent) / 0.1) 75%)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider text-xs sm:text-sm bg-accent/10 px-3 sm:px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Orçamento
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground">
              SOLICITAR ORÇAMENTO
            </h1>
          </motion.div>
        </div>
        
        {/* Diagonal cut */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
      </section>

      {/* Breadcrumb */}
      <div className="bg-background py-4 border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            {" > "}
            <Link to="/#frota" className="hover:text-accent transition-colors">Nossa Frota</Link>
            {" > "}
            <span className="text-accent font-medium">Orçamento</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden" style={{ backgroundColor: '#f8f9fa' }}>
        {/* Blurred background image */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${orcamentoBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)',
          }}
        />
        {/* White overlay for contrast */}
        <div className="absolute inset-0 bg-white/70" />
        
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 md:py-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                {/* Left Column - Vehicle Selection */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-carflex-navy rounded-full flex items-center justify-center flex-shrink-0">
                      <Car className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-carflex-navy">SELECIONE O VEÍCULO</h2>
                  </div>

                  {/* Vehicle Grid */}
                  <div className="space-y-3 sm:space-y-4">
                    {veiculosList.map((veiculo, index) => (
                      <motion.div
                        key={veiculo.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onClick={() => setSelectedVeiculo(veiculo.id)}
                        className={`cursor-pointer rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 transition-all duration-300 backdrop-blur-sm ${
                          selectedVeiculo === veiculo.id
                            ? "border-accent bg-carflex-navy shadow-lg shadow-accent/30"
                            : "border-carflex-navy/20 bg-white/80 hover:border-accent/50 hover:bg-white/90"
                        }`}
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          {/* Vehicle Image */}
                          <div className={`w-24 h-16 sm:w-32 sm:h-20 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden ${
                            selectedVeiculo === veiculo.id ? "bg-white/10" : "bg-carflex-navy/5"
                          }`}>
                            <img 
                              src={veiculo.image} 
                              alt={veiculo.name}
                              className="w-full h-full object-contain"
                            />
                          </div>

                          {/* Vehicle Info */}
                          <div className="flex-1 min-w-0">
                            <h3 className={`font-bold text-sm sm:text-base transition-colors ${
                              selectedVeiculo === veiculo.id ? "text-accent" : "text-carflex-navy"
                            }`}>
                              {veiculo.name}
                            </h3>
                            <p className={`text-xs sm:text-sm line-clamp-2 ${
                              selectedVeiculo === veiculo.id ? "text-white/70" : "text-carflex-navy/60"
                            }`}>{veiculo.description}</p>
                          </div>

                          {/* Selection Indicator */}
                          <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                            selectedVeiculo === veiculo.id
                              ? "border-accent bg-accent"
                              : "border-carflex-navy/30"
                          }`}>
                            {selectedVeiculo === veiculo.id && (
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-[10px] sm:text-xs text-carflex-navy/50 italic text-center mt-2">*Imagens ilustrativas</p>
                </div>

                {/* Right Column - Form */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Tipo de Locação */}
                  <div className="bg-carflex-navy rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-carflex-navy-light/50 shadow-lg">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Car className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <h2 className="text-base sm:text-lg font-bold text-white">TIPO DE LOCAÇÃO</h2>
                    </div>

                    <p className="text-xs sm:text-sm text-accent font-medium mb-3 sm:mb-4 bg-accent/10 p-2.5 sm:p-3 rounded-lg">
                      *Nossas locações para Pessoa Física (PF) estão temporariamente suspensas.
                    </p>

                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <Label className="text-white/70 text-xs sm:text-sm mb-1.5 sm:mb-2 block">Selecione um perfil</Label>
                        <Select value={formData.perfil} onValueChange={(v) => setFormData({...formData, perfil: v})}>
                          <SelectTrigger className="bg-carflex-navy-light border-carflex-navy-light text-white h-10 sm:h-11 text-sm">
                            <SelectValue placeholder="Selecione um perfil" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pj">Pessoa Jurídica (PJ)</SelectItem>
                            <SelectItem value="mei">MEI</SelectItem>
                            <SelectItem value="autonomo">Autônomo com CNPJ</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-white/70 text-xs sm:text-sm mb-1.5 sm:mb-2 block">Grupo de veículos escolhido</Label>
                        <Select value={selectedVeiculo} onValueChange={setSelectedVeiculo}>
                          <SelectTrigger className="bg-carflex-navy-light border-carflex-navy-light text-white h-10 sm:h-11 text-sm">
                            <SelectValue placeholder="Selecione uma categoria" />
                          </SelectTrigger>
                          <SelectContent>
                            {veiculosList.map((v) => (
                              <SelectItem key={v.id} value={v.id}>{v.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Seus Dados */}
                  <div className="bg-carflex-navy rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-carflex-navy-light/50 shadow-lg">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <h2 className="text-base sm:text-lg font-bold text-white">SEUS DADOS</h2>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <Label className="text-white/70 text-xs sm:text-sm mb-1.5 sm:mb-2 block">Nome da empresa</Label>
                        <Input 
                          value={formData.nomeEmpresa}
                          onChange={(e) => setFormData({...formData, nomeEmpresa: e.target.value})}
                          className="bg-carflex-navy-light border-carflex-navy-light text-white h-10 sm:h-11 text-sm"
                          required
                        />
                      </div>

                      <div>
                        <Label className="text-white/70 text-xs sm:text-sm mb-1.5 sm:mb-2 block">CNPJ</Label>
                        <Input 
                          value={formData.cnpj}
                          onChange={(e) => setFormData({...formData, cnpj: e.target.value})}
                          placeholder="00.000.000/0000-00"
                          className="bg-carflex-navy-light border-carflex-navy-light text-white placeholder:text-white/40 h-10 sm:h-11 text-sm"
                          required
                        />
                      </div>

                      <div>
                        <Label className="text-white/70 text-xs sm:text-sm mb-1.5 sm:mb-2 block">Seu nome</Label>
                        <Input 
                          value={formData.nome}
                          onChange={(e) => setFormData({...formData, nome: e.target.value})}
                          className="bg-carflex-navy-light border-carflex-navy-light text-white h-10 sm:h-11 text-sm"
                          required
                        />
                      </div>

                      <div>
                        <Label className="text-white/70 text-xs sm:text-sm mb-1.5 sm:mb-2 block">E-Mail</Label>
                        <Input 
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-carflex-navy-light border-carflex-navy-light text-white h-10 sm:h-11 text-sm"
                          required
                        />
                      </div>

                      <div>
                        <Label className="text-white/70 text-xs sm:text-sm mb-1.5 sm:mb-2 block">Celular</Label>
                        <Input 
                          value={formData.celular}
                          onChange={(e) => setFormData({...formData, celular: e.target.value})}
                          placeholder="(00) 00000-0000"
                          className="bg-carflex-navy-light border-carflex-navy-light text-white placeholder:text-white/40 h-10 sm:h-11 text-sm"
                          required
                        />
                      </div>

                      <div>
                        <Label className="text-white/70 text-xs sm:text-sm mb-1.5 sm:mb-2 block">Como nos encontrou?</Label>
                        <Select value={formData.comoNosEncontrou} onValueChange={(v) => setFormData({...formData, comoNosEncontrou: v})}>
                          <SelectTrigger className="bg-carflex-navy-light border-carflex-navy-light text-white h-10 sm:h-11 text-sm">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="google">Google</SelectItem>
                            <SelectItem value="instagram">Instagram</SelectItem>
                            <SelectItem value="indicacao">Indicação</SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Dados da Locação */}
                  <div className="bg-carflex-navy rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-carflex-navy-light/50 shadow-lg">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <h2 className="text-base sm:text-lg font-bold text-white">DADOS DA LOCAÇÃO</h2>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <Label className="text-white/70 text-xs sm:text-sm mb-1.5 sm:mb-2 block">Local de retirada do veículo</Label>
                        <Select value={formData.localRetirada} onValueChange={(v) => setFormData({...formData, localRetirada: v})}>
                          <SelectTrigger className="bg-carflex-navy-light border-carflex-navy-light text-white h-10 sm:h-11 text-xs sm:text-sm">
                            <SelectValue placeholder="Selecione um local" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sede">Sede - Rua Princesa Isabel, 269 - Ipiranga, BH</SelectItem>
                            <SelectItem value="aeroporto">Aeroporto de Confins</SelectItem>
                            <SelectItem value="outro">Outro (combinar)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <Label className="text-white/70 text-xs sm:text-sm mb-1.5 sm:mb-2 block">Data da retirada</Label>
                          <Input 
                            type="date" 
                            value={formData.dataRetirada}
                            onChange={(e) => setFormData({...formData, dataRetirada: e.target.value})}
                            className="bg-carflex-navy-light border-carflex-navy-light text-white h-10 sm:h-11 text-sm"
                          />
                        </div>
                        <div>
                          <Label className="text-white/70 text-xs sm:text-sm mb-1.5 sm:mb-2 block">Horário da retirada</Label>
                          <Select value={formData.horarioRetirada} onValueChange={(v) => setFormData({...formData, horarioRetirada: v})}>
                            <SelectTrigger className="bg-carflex-navy-light border-carflex-navy-light text-white h-10 sm:h-11 text-sm">
                              <SelectValue placeholder="Horário" />
                            </SelectTrigger>
                            <SelectContent>
                              {horarios.map((h) => (
                                <SelectItem key={h} value={h}>{h}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <Label className="text-white/70 text-xs sm:text-sm mb-1.5 sm:mb-2 block">Data da entrega</Label>
                          <Input 
                            type="date" 
                            value={formData.dataEntrega}
                            onChange={(e) => setFormData({...formData, dataEntrega: e.target.value})}
                            className="bg-carflex-navy-light border-carflex-navy-light text-white h-10 sm:h-11 text-sm"
                          />
                        </div>
                        <div>
                          <Label className="text-white/70 text-xs sm:text-sm mb-1.5 sm:mb-2 block">Horário da entrega</Label>
                          <Select value={formData.horarioEntrega} onValueChange={(v) => setFormData({...formData, horarioEntrega: v})}>
                            <SelectTrigger className="bg-carflex-navy-light border-carflex-navy-light text-white h-10 sm:h-11 text-sm">
                              <SelectValue placeholder="Horário" />
                            </SelectTrigger>
                            <SelectContent>
                              {horarios.map((h) => (
                                <SelectItem key={h} value={h}>{h}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label className="text-white/70 text-xs sm:text-sm mb-2 sm:mb-3 block">Quanto tempo você deseja permanecer com o veículo?</Label>
                        <RadioGroup value={formData.tempoLocacao} onValueChange={(v) => setFormData({...formData, tempoLocacao: v})} className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="menos30" id="menos30" className="border-accent text-accent" />
                            <Label htmlFor="menos30" className="font-normal cursor-pointer text-white text-xs sm:text-sm">Menos de 30 dias</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="mais30" id="mais30" className="border-accent text-accent" />
                            <Label htmlFor="mais30" className="font-normal cursor-pointer text-white text-xs sm:text-sm">30 dias ou mais</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label className="text-white/70 text-xs sm:text-sm mb-2 sm:mb-3 block">Selecione a(s) franquia(s) desejada(s)</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {franquiasOptions.map((franquia) => (
                            <div key={franquia} className="flex items-center space-x-2">
                              <Checkbox 
                                id={franquia} 
                                checked={formData.franquias.includes(franquia)}
                                onCheckedChange={(checked) => handleFranquiaChange(franquia, checked as boolean)}
                                className="border-accent data-[state=checked]:bg-accent flex-shrink-0"
                              />
                              <Label htmlFor={franquia} className="font-normal cursor-pointer text-white text-xs sm:text-sm">{franquia}</Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Captcha & Submit */}
                  <div className="bg-carflex-navy rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-carflex-navy-light/50 shadow-lg">
                    <div className="bg-accent/10 rounded-lg sm:rounded-xl p-4 sm:p-5 mb-3 sm:mb-4 flex items-center justify-center gap-3 sm:gap-4 text-2xl sm:text-3xl font-black text-white">
                      <span>{captcha.num1}</span>
                      <span className="text-accent">+</span>
                      <span>{captcha.num2}</span>
                    </div>
                    <Label className="text-white/70 text-xs sm:text-sm mb-1.5 sm:mb-2 block">Insira a resposta da operação:</Label>
                    <Input 
                      type="number"
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      className="bg-carflex-navy-light border-carflex-navy-light text-white h-10 sm:h-11 text-sm"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-secondary font-bold py-5 sm:py-6 text-sm sm:text-lg shadow-lg shadow-accent/25 rounded-lg sm:rounded-xl"
                  >
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                    ENVIAR MEU PEDIDO DE ORÇAMENTO
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Orcamento;
