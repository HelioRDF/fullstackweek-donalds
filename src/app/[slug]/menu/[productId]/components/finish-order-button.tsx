"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { isValidCpf } from "../../helpers/cpf";

const formSchema = z.object({
  nome: z.string().trim().min(1, {
    message: "Informe o seu nome!",
  }),
  telefone: z.string().trim().min(1, {
    message: "Informe o seu telefone!",
  }),
  endereco: z.string().trim().min(1, {
    message: "Informe o seu endereço!",
  }),

  cpf: z
    .string()
    .trim()
    .min(1, {
      message: "Informe o seu CPF!",
    })
    .refine((value) => isValidCpf(value), {
      message: "CPF Inválido!",
    }),
});
type FormSchema = z.infer<typeof formSchema>;
const onSubmit = (data: FormSchema) => {
  console.log("Chamou a função!", data);
};
const FinishOrderButton = () => {
  const msgVoltar = "<   Voltar";
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      cpf: "",
    },
  });
  return (
    <Drawer>
      <DrawerTrigger className="w-full" asChild>
        <Button className="w-full">Concluir Pedido!</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Finalizar pedido</DrawerTitle>
          <DrawerDescription>
            Insira suas informações para concluir a compra!
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu Nome" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CPF</FormLabel>
                    <FormControl>
                      <PatternFormat
                        placeholder="Digite o seu CPF"
                        format="###.###.###-##"
                        customInput={Input}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <DrawerFooter>
                <Button
                  type="submit"
                  className="rounded-full"
                  variant="destructive"
                >
                  Confirmar Pedido
                </Button>
                <DrawerClose>
                  <Button variant="outline" className="w-full rounded-full">
                    {msgVoltar}
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FinishOrderButton;
