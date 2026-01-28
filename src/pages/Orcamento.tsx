import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Car, User, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Formatting functions
const formatCPF = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 11) {
    return numbers
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  return value;
};

const formatCNPJ = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 14) {
    return numbers
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
  }
  return value;
};

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 11) {
    if (numbers.length <= 10) {
      return numbers
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d{1,4})$/, "$1-$2");
    } else {
      return numbers
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d{1,4})$/, "$1-$2");
    }
  }
  return value;
};

// Vehicle images
import fleetEconomico from "@/assets/kiwid.png";
import fleetIntermediario from "@/assets/polotrack.png";
import fleetUtilitarios from "@/assets/saveiro.png";
import fleetHatch from "@/assets/ka.png";
import fleetMoto from "@/assets/bros.png";

const Orcamento = () => {
  const [searchParams] = useSearchParams();
  const categoriaParam = searchParams.get("categoria");
  const { toast } = useToast();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Vehicle groups and their vehicles
  const gruposVeiculos = {
    "Econômico": [
      { id: "Kwid", name: "Kwid" },
      { id: "Mobi", name: "Mobi" },
    ],
    "Intermediário": [
      { id: "Polo Track", name: "Polo Track" },
      { id: "Voyage", name: "Voyage" },
      { id: "HB20 Sedan", name: "HB20 Sedan" },
    ],
    "Utilitários": [
      { id: "Strada", name: "Strada" },
      { id: "Saveiro", name: "Saveiro" },
      { id: "Oroch", name: "Oroch" },
    ],
    "Hatch": [
      { id: "Ford Ka", name: "Ford Ka" },
      { id: "Onix", name: "Onix" },
      { id: "Argo", name: "Argo" },
      { id: "HB20", name: "HB20" },
      { id: "C3", name: "C3" },
    ],
    "Motos": [
      { id: "XRE 300", name: "XRE 300" },
      { id: "Bros 160", name: "Bros 160" },
      { id: "Fan 160", name: "Fan 160" },
    ],
  };

  // Vehicle data list for images
  const veiculosList = [
    { id: "Econômico", image: fleetEconomico, name: "Econômico", description: "Compacto ideal para mobilidade urbana" },
    { id: "Intermediário", image: fleetIntermediario, name: "Intermediário", description: "Confortável e eficiente para deslocamentos" },
    { id: "Utilitários", image: fleetUtilitarios, name: "Utilitários", description: "SUV robusto para cargas e diferentes terrenos" },
    { id: "Hatch", image: fleetHatch, name: "Hatch", description: "Versatilidade e praticidade para o dia a dia" },
    { id: "Motos", image: fleetMoto, name: "Motos", description: "Agilidade para entregas e deslocamentos rápidos" },
  ];

  const [selectedGrupo, setSelectedGrupo] = useState(categoriaParam || "");
  const [selectedVeiculo, setSelectedVeiculo] = useState("");

  const [formData, setFormData] = useState({
    tipoDocumento: "",
    nomeEmpresa: "",
    cnpj: "",
    cpf: "",
    nome: "",
    email: "",
    celular: "",
    comoNosEncontrou: "",
    localRetirada: "sede",
    dataRetirada: "",
    dataEntrega: "",
  });

  // Calculate duration in days based on dates
  const calcularDuracao = (dataRetirada: string, dataEntrega: string): number => {
    if (!dataRetirada || !dataEntrega) return 0;
    const inicio = new Date(dataRetirada);
    const fim = new Date(dataEntrega);
    const diffTime = Math.abs(fim.getTime() - inicio.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedGrupo) {
      toast({
        title: "Selecione um grupo",
        description: "Por favor, selecione um grupo de veículos.",
        variant: "destructive",
      });
      return;
    }

    if (!selectedVeiculo) {
      toast({
        title: "Selecione um veículo",
        description: "Por favor, selecione um veículo do grupo.",
        variant: "destructive",
      });
      return;
    }

    // Validate minimum duration of 30 days
    if (formData.dataRetirada && formData.dataEntrega) {
      const duracao = calcularDuracao(formData.dataRetirada, formData.dataEntrega);
      if (duracao < 30) {
        toast({
          title: "Duração mínima não atendida",
          description: "O tempo mínimo de locação é de 30 dias. Por favor, ajuste as datas.",
          variant: "destructive",
        });
        return;
      }
    }

    // Build email message
    const emailBody = `
PEDIDO DE ORÇAMENTO - CARFLEX

TIPO DE LOCAÇÃO
Grupo: ${selectedGrupo || "Não informado"}
Veículo do Grupo: ${selectedVeiculo || "Não informado"}

DADOS DA EMPRESA
Nome da Empresa: ${formData.nomeEmpresa}
${formData.tipoDocumento === "cpf" ? "CPF" : formData.tipoDocumento === "cnpj" ? "CNPJ" : "Documento"}: ${formData.tipoDocumento === "cpf" ? formData.cpf : formData.tipoDocumento === "cnpj" ? formData.cnpj : "Não informado"}
Contato: ${formData.nome}
E-mail: ${formData.email}
Celular: ${formData.celular}
Como nos encontrou: ${formData.comoNosEncontrou || "Não informado"}

DADOS DA LOCAÇÃO
Local de Retirada: ${formData.localRetirada || "Não informado"}
Data da Retirada: ${formData.dataRetirada || "Não informado"}
Data da Entrega: ${formData.dataEntrega || "Não informado"}
Duração: ${calcularDuracao(formData.dataRetirada, formData.dataEntrega)} dias

---
Este email foi enviado automaticamente através do formulário de orçamento do site Carflex.
    `.trim();

    try {
      // Usar FormSubmit - serviço gratuito e simples
      const formDataToSend = new FormData();
      formDataToSend.append("email", "administrativo@carflexlocadora.com.br");
      formDataToSend.append("subject", `Novo Pedido de Orçamento - ${formData.nomeEmpresa}`);
      formDataToSend.append("message", emailBody);
      formDataToSend.append("_replyto", formData.email);
      formDataToSend.append("_cc", formData.email);

      const response = await fetch("https://formsubmit.co/ajax/administrativo@carflexlocadora.com.br", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: "administrativo@carflexlocadora.com.br",
          subject: `Novo Pedido de Orçamento - ${formData.nomeEmpresa}`,
          message: emailBody,
          _replyto: formData.email,
          _cc: formData.email,
        }),
      });

      if (response.ok) {
        toast({
          title: "Orçamento enviado com sucesso!",
          description: "Recebemos seu pedido e entraremos em contato em breve.",
        });

        // Reset form
        setFormData({
          tipoDocumento: "",
          nomeEmpresa: "",
          cnpj: "",
          cpf: "",
          nome: "",
          email: "",
          celular: "",
          comoNosEncontrou: "",
          localRetirada: "sede",
          dataRetirada: "",
          dataEntrega: "",
        });
        setSelectedGrupo("");
        setSelectedVeiculo("");
      } else {
        throw new Error("Erro ao enviar");
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error);

      // Fallback: usar mailto
      const mailtoSubject = encodeURIComponent(`Novo Pedido de Orçamento - ${formData.nomeEmpresa}`);
      const mailtoBody = encodeURIComponent(emailBody);
      window.location.href = `mailto:administrativo@carflexlocadora.com.br?subject=${mailtoSubject}&body=${mailtoBody}`;

      toast({
        title: "Abrindo cliente de email",
        description: "Preencha seu cliente de email e envie para administrativo@carflexlocadora.com.br",
      });
    }
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
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 md:py-12">
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
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Car className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-foreground">SELECIONE O VEÍCULO</h2>
                  </div>

                  {/* Vehicle Grid */}
                  <div className="space-y-3 sm:space-y-4">
                    {veiculosList.map((veiculo, index) => (
                      <motion.div
                        key={veiculo.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onClick={() => {
                          setSelectedGrupo(veiculo.id);
                          setSelectedVeiculo(""); // Reset veículo quando grupo muda
                        }}
                        className={`cursor-pointer rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 transition-all duration-300 ${selectedGrupo === veiculo.id
                          ? "border-accent bg-accent/10 shadow-lg shadow-accent/20"
                          : "border-border/30 bg-secondary/30 hover:border-accent/50 hover:bg-secondary/50"
                          }`}
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          {/* Vehicle Image */}
                          <div className="w-32 h-20 sm:w-40 sm:h-28 md:w-48 md:h-32 bg-foreground/5 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                            <img
                              src={veiculo.image}
                              alt={veiculo.name}
                              className="object-contain"
                              loading="lazy"
                              decoding="async"
                              style={{
                                width: '140px',
                                height: 'auto',
                                maxWidth: 'none'
                              }}
                            />
                          </div>

                          {/* Vehicle Info */}
                          <div className="flex-1 min-w-0">
                            <h3 className={`font-bold text-sm sm:text-base transition-colors ${selectedVeiculo === veiculo.id ? "text-accent" : "text-foreground"
                              }`}>
                              {veiculo.name}
                            </h3>
                            <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">{veiculo.description}</p>
                          </div>

                          {/* Selection Indicator */}
                          <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${selectedVeiculo === veiculo.id
                            ? "border-accent bg-accent"
                            : "border-muted-foreground/30"
                            }`}>
                            {selectedVeiculo === veiculo.id && (
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-[10px] sm:text-xs text-muted-foreground/60 italic text-center mt-2">*Imagens ilustrativas</p>
                </div>

                {/* Right Column - Form */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Tipo de Locação */}
                  <div className="bg-secondary/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/30">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Car className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <h2 className="text-base sm:text-lg font-bold text-foreground">TIPO DE LOCAÇÃO</h2>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <Label className="text-muted-foreground text-xs sm:text-sm mb-1.5 sm:mb-2 block">Grupo</Label>
                        <Select
                          value={selectedGrupo}
                          onValueChange={(v) => {
                            setSelectedGrupo(v);
                            setSelectedVeiculo(""); // Reset veículo quando grupo muda
                          }}
                        >
                          <SelectTrigger className="bg-secondary border-border/50 text-foreground h-10 sm:h-11 text-sm">
                            <SelectValue placeholder="Selecione um grupo" />
                          </SelectTrigger>
                          <SelectContent>
                            {veiculosList.map((v) => (
                              <SelectItem key={v.id} value={v.id}>{v.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-muted-foreground text-xs sm:text-sm mb-1.5 sm:mb-2 block">Veículos do grupo</Label>
                        <Select
                          value={selectedVeiculo}
                          onValueChange={setSelectedVeiculo}
                          disabled={!selectedGrupo}
                        >
                          <SelectTrigger className="bg-secondary border-border/50 text-foreground h-10 sm:h-11 text-sm">
                            <SelectValue placeholder={selectedGrupo ? "Selecione um veículo" : "Primeiro selecione um grupo"} />
                          </SelectTrigger>
                          <SelectContent>
                            {selectedGrupo && gruposVeiculos[selectedGrupo as keyof typeof gruposVeiculos]?.map((veiculo) => (
                              <SelectItem key={veiculo.id} value={veiculo.id}>{veiculo.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Seus Dados */}
                  <div className="bg-secondary/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/30">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <h2 className="text-base sm:text-lg font-bold text-foreground">SEUS DADOS</h2>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <Label className="text-muted-foreground text-xs sm:text-sm mb-1.5 sm:mb-2 block">CPF ou CNPJ</Label>
                        <Select value={formData.tipoDocumento} onValueChange={(v) => setFormData({ ...formData, tipoDocumento: v, cnpj: "", cpf: "" })}>
                          <SelectTrigger className="bg-secondary border-border/50 text-foreground h-10 sm:h-11 text-sm">
                            <SelectValue placeholder="Selecione CPF ou CNPJ" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cpf">CPF</SelectItem>
                            <SelectItem value="cnpj">CNPJ</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-muted-foreground text-xs sm:text-sm mb-1.5 sm:mb-2 block">Nome da empresa</Label>
                        <Input
                          value={formData.nomeEmpresa}
                          onChange={(e) => setFormData({ ...formData, nomeEmpresa: e.target.value })}
                          className="bg-secondary border-border/50 text-foreground h-10 sm:h-11 text-sm"
                          required
                        />
                      </div>

                      {formData.tipoDocumento === "cpf" && (
                        <div>
                          <Label className="text-muted-foreground text-xs sm:text-sm mb-1.5 sm:mb-2 block">CPF</Label>
                          <Input
                            value={formData.cpf}
                            onChange={(e) => setFormData({ ...formData, cpf: formatCPF(e.target.value) })}
                            placeholder="000.000.000-00"
                            className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground/50 h-10 sm:h-11 text-sm"
                            maxLength={14}
                            required
                          />
                        </div>
                      )}

                      {formData.tipoDocumento === "cnpj" && (
                        <div>
                          <Label className="text-muted-foreground text-xs sm:text-sm mb-1.5 sm:mb-2 block">CNPJ</Label>
                          <Input
                            value={formData.cnpj}
                            onChange={(e) => setFormData({ ...formData, cnpj: formatCNPJ(e.target.value) })}
                            placeholder="00.000.000/0000-00"
                            className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground/50 h-10 sm:h-11 text-sm"
                            maxLength={18}
                            required
                          />
                        </div>
                      )}

                      <div>
                        <Label className="text-muted-foreground text-xs sm:text-sm mb-1.5 sm:mb-2 block">Seu nome</Label>
                        <Input
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          className="bg-secondary border-border/50 text-foreground h-10 sm:h-11 text-sm"
                          required
                        />
                      </div>

                      <div>
                        <Label className="text-muted-foreground text-xs sm:text-sm mb-1.5 sm:mb-2 block">E-Mail</Label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-secondary border-border/50 text-foreground h-10 sm:h-11 text-sm"
                          required
                        />
                      </div>

                      <div>
                        <Label className="text-muted-foreground text-xs sm:text-sm mb-1.5 sm:mb-2 block">Celular</Label>
                        <Input
                          value={formData.celular}
                          onChange={(e) => setFormData({ ...formData, celular: formatPhone(e.target.value) })}
                          placeholder="(00) 00000-0000"
                          className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground/50 h-10 sm:h-11 text-sm"
                          maxLength={15}
                          required
                        />
                      </div>

                      <div>
                        <Label className="text-muted-foreground text-xs sm:text-sm mb-1.5 sm:mb-2 block">Como nos encontrou?</Label>
                        <Select value={formData.comoNosEncontrou} onValueChange={(v) => setFormData({ ...formData, comoNosEncontrou: v })}>
                          <SelectTrigger className="bg-secondary border-border/50 text-foreground h-10 sm:h-11 text-sm">
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
                  <div className="bg-secondary/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/30">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <h2 className="text-base sm:text-lg font-bold text-foreground">DADOS DA LOCAÇÃO</h2>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <Label className="text-muted-foreground text-xs sm:text-sm mb-1.5 sm:mb-2 block">Local de retirada do veículo</Label>
                        <Select value={formData.localRetirada} onValueChange={(v) => setFormData({ ...formData, localRetirada: v })}>
                          <SelectTrigger className="bg-secondary border-border/50 text-foreground h-10 sm:h-11 text-xs sm:text-sm">
                            <SelectValue placeholder="Selecione um local" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sede">Sede - Rua Princesa Isabel, 269 - Ipiranga, BH</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <Label className="text-muted-foreground text-xs sm:text-sm mb-1.5 sm:mb-2 block">Data da retirada</Label>
                          <Input
                            type="date"
                            value={formData.dataRetirada}
                            onChange={(e) => setFormData({ ...formData, dataRetirada: e.target.value })}
                            className={`bg-secondary border-border/50 text-foreground h-10 sm:h-11 text-sm ${formData.dataRetirada && formData.dataEntrega && calcularDuracao(formData.dataRetirada, formData.dataEntrega) < 30
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                : ''
                              }`}
                          />
                        </div>
                        <div>
                          <Label className="text-muted-foreground text-xs sm:text-sm mb-1.5 sm:mb-2 block">Data da entrega</Label>
                          <Input
                            type="date"
                            value={formData.dataEntrega}
                            onChange={(e) => setFormData({ ...formData, dataEntrega: e.target.value })}
                            className={`bg-secondary border-border/50 text-foreground h-10 sm:h-11 text-sm ${formData.dataRetirada && formData.dataEntrega && calcularDuracao(formData.dataRetirada, formData.dataEntrega) < 30
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                : ''
                              }`}
                          />
                        </div>
                      </div>

                      {/* Duração calculada */}
                      {formData.dataRetirada && formData.dataEntrega && calcularDuracao(formData.dataRetirada, formData.dataEntrega) > 0 && (
                        <div className={`mt-2 p-3 rounded-lg border ${calcularDuracao(formData.dataRetirada, formData.dataEntrega) < 30
                            ? 'bg-red-500/10 border-red-500/50'
                            : 'bg-accent/10 border-accent/20'
                          }`}>
                          <p className="text-sm text-foreground">
                            <span className={`font-semibold ${calcularDuracao(formData.dataRetirada, formData.dataEntrega) < 30 ? 'text-red-500' : 'text-accent'}`}>
                              Duração total:
                            </span>
                            <span className={`font-bold ${calcularDuracao(formData.dataRetirada, formData.dataEntrega) < 30 ? 'text-red-500' : 'text-accent'}`}>
                              {' '}{calcularDuracao(formData.dataRetirada, formData.dataEntrega)}
                            </span>
                            <span className="text-muted-foreground"> {calcularDuracao(formData.dataRetirada, formData.dataEntrega) === 1 ? 'dia' : 'dias'}</span>
                          </p>
                          {calcularDuracao(formData.dataRetirada, formData.dataEntrega) < 30 && (
                            <p className="text-xs text-red-500 mt-2 font-medium">
                              ⚠️ O tempo mínimo de locação é de 30 dias
                            </p>
                          )}
                        </div>
                      )}
                    </div>
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
