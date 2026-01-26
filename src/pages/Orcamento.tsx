import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Car, User, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/carflex-logo.png";

const Orcamento = () => {
  const [searchParams] = useSearchParams();
  const categoria = searchParams.get("categoria") || "";
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    perfil: "",
    grupoVeiculo: categoria,
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

  const categorias = [
    "Econômico",
    "Intermediário",
    "Utilitários",
    "Hatch",
    "Motos",
  ];

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
      `*Grupo de Veículos:* ${formData.grupoVeiculo}%0A%0A` +
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Carflex" className="h-10" />
          </Link>
          <Link to="/#frota">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar para Frota
            </Button>
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-accent/10 py-3">
        <div className="container mx-auto px-4">
          <p className="text-sm text-secondary/60">
            <Link to="/" className="hover:text-accent">Home</Link>
            {" > "}
            <Link to="/#frota" className="hover:text-accent">Nossa Frota</Link>
            {" > "}
            <span className="text-accent font-medium">Solicitar Orçamento {categoria && `- ${categoria}`}</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-4xl font-black text-accent text-center mb-8">
            SOLICITAR ORÇAMENTO {categoria && `- ${categoria.toUpperCase()}`}
          </h1>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Vehicle Info */}
              <div className="space-y-6">
                {/* Tipo de Locação */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Car className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="text-lg font-bold text-secondary">TIPO DE LOCAÇÃO</h2>
                  </div>

                  <p className="text-sm text-accent font-medium mb-4">
                    *Nossas locações para Pessoa Física (PF) estão temporariamente suspensas.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <Label>Selecione um perfil</Label>
                      <Select value={formData.perfil} onValueChange={(v) => setFormData({...formData, perfil: v})}>
                        <SelectTrigger className="border-accent/30 focus:border-accent">
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
                      <Label>Grupo de veículos escolhido</Label>
                      <Select value={formData.grupoVeiculo} onValueChange={(v) => setFormData({...formData, grupoVeiculo: v})}>
                        <SelectTrigger className="border-accent/30 focus:border-accent">
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          {categorias.map((cat) => (
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Dados da Locação */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="text-lg font-bold text-secondary">DADOS DA LOCAÇÃO</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label>Local de retirada do veículo</Label>
                      <Select value={formData.localRetirada} onValueChange={(v) => setFormData({...formData, localRetirada: v})}>
                        <SelectTrigger className="border-accent/30 focus:border-accent">
                          <SelectValue placeholder="Selecione um local de retirada" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sede">Sede - Rua Princesa Isabel, 269 - Ipiranga, BH</SelectItem>
                          <SelectItem value="aeroporto">Aeroporto de Confins</SelectItem>
                          <SelectItem value="outro">Outro (combinar)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Data da retirada</Label>
                        <Input 
                          type="date" 
                          value={formData.dataRetirada}
                          onChange={(e) => setFormData({...formData, dataRetirada: e.target.value})}
                          className="border-accent/30 focus:border-accent"
                        />
                      </div>
                      <div>
                        <Label>Horário da retirada</Label>
                        <Select value={formData.horarioRetirada} onValueChange={(v) => setFormData({...formData, horarioRetirada: v})}>
                          <SelectTrigger className="border-accent/30 focus:border-accent">
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

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Data da entrega</Label>
                        <Input 
                          type="date" 
                          value={formData.dataEntrega}
                          onChange={(e) => setFormData({...formData, dataEntrega: e.target.value})}
                          className="border-accent/30 focus:border-accent"
                        />
                      </div>
                      <div>
                        <Label>Horário da entrega</Label>
                        <Select value={formData.horarioEntrega} onValueChange={(v) => setFormData({...formData, horarioEntrega: v})}>
                          <SelectTrigger className="border-accent/30 focus:border-accent">
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
                      <Label className="mb-3 block">Quanto tempo você deseja permanecer com o veículo?</Label>
                      <RadioGroup value={formData.tempoLocacao} onValueChange={(v) => setFormData({...formData, tempoLocacao: v})} className="flex gap-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="menos30" id="menos30" />
                          <Label htmlFor="menos30" className="font-normal cursor-pointer">Menos de 30 dias da locação</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mais30" id="mais30" />
                          <Label htmlFor="mais30" className="font-normal cursor-pointer">30 dias ou mais</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="mb-3 block">Selecione a(s) franquia(s) desejada(s)</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {franquiasOptions.map((franquia) => (
                          <div key={franquia} className="flex items-center space-x-2">
                            <Checkbox 
                              id={franquia} 
                              checked={formData.franquias.includes(franquia)}
                              onCheckedChange={(checked) => handleFranquiaChange(franquia, checked as boolean)}
                            />
                            <Label htmlFor={franquia} className="font-normal cursor-pointer text-sm">{franquia}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - User Data */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="text-lg font-bold text-secondary">SEUS DADOS</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label>Nome da empresa</Label>
                      <Input 
                        value={formData.nomeEmpresa}
                        onChange={(e) => setFormData({...formData, nomeEmpresa: e.target.value})}
                        className="border-accent/30 focus:border-accent"
                        required
                      />
                    </div>

                    <div>
                      <Label>CNPJ</Label>
                      <Input 
                        value={formData.cnpj}
                        onChange={(e) => setFormData({...formData, cnpj: e.target.value})}
                        placeholder="00.000.000/0000-00"
                        className="border-accent/30 focus:border-accent"
                        required
                      />
                    </div>

                    <div>
                      <Label>Seu nome</Label>
                      <Input 
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                        className="border-accent/30 focus:border-accent"
                        required
                      />
                    </div>

                    <div>
                      <Label>E-Mail</Label>
                      <Input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="border-accent/30 focus:border-accent"
                        required
                      />
                    </div>

                    <div>
                      <Label>Celular</Label>
                      <Input 
                        value={formData.celular}
                        onChange={(e) => setFormData({...formData, celular: e.target.value})}
                        placeholder="(00) 00000-0000"
                        className="border-accent/30 focus:border-accent"
                        required
                      />
                    </div>

                    <div>
                      <Label>Como nos encontrou?</Label>
                      <Select value={formData.comoNosEncontrou} onValueChange={(v) => setFormData({...formData, comoNosEncontrou: v})}>
                        <SelectTrigger className="border-accent/30 focus:border-accent">
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

                {/* Captcha & Submit */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="bg-accent/10 rounded-lg p-4 mb-4 flex items-center justify-center gap-4 text-2xl font-bold text-secondary">
                    <span>{captcha.num1}</span>
                    <span>+</span>
                    <span>{captcha.num2}</span>
                  </div>
                  <Label>Insira a resposta da operação:</Label>
                  <Input 
                    type="number"
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    className="border-accent/30 focus:border-accent mt-2"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg shadow-lg shadow-accent/25"
                >
                  <Check className="w-5 h-5 mr-2" />
                  ENVIAR MEU PEDIDO DE ORÇAMENTO
                </Button>
              </div>
            </div>
          </form>
        </motion.div>
      </main>
    </div>
  );
};

export default Orcamento;
