import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { contactPageVariants, formFieldTransition } from '@/lib/contactPageAnimations'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { getLocaleFromPath } from '@/lib/i18n'
import { translations } from '@/lib/i18n'
import { OfficesMap } from '@/components/OfficesMap'

type FormValues = { name: string; phone: string; email: string; message: string }

const PHONE = '(55) 1313 7404'
const EMAIL = 'saguilar@cppg.mx'

export function ContactoPage() {
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const t = translations[locale].contactPage
  const offices = translations[locale].officesSection

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(1, t.nameRequired),
        phone: z.string().min(1, t.phoneRequired),
        email: z.string().min(1, t.emailRequired).email(t.emailInvalid),
        message: z.string().min(1, t.messageRequired),
      }),
    [t]
  )

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', phone: '', email: '', message: '' },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
    toast.success(t.successToast)
    form.reset()
  }
  const onError = () => {
    toast.error(t.errorToast)
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={contactPageVariants.container}
      className="container px-4 py-12 md:px-6 md:py-16"
    >
      <motion.h1
        variants={contactPageVariants.title}
        className="mb-6 text-3xl font-semibold md:text-4xl"
      >
        {t.title}
      </motion.h1>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
        }}
        className="grid gap-12 lg:grid-cols-2"
      >
        <motion.div
          variants={contactPageVariants.column}
          className="space-y-6"
        >
          <motion.h2 variants={contactPageVariants.item} className="text-xl font-semibold">
            {t.officesTitle}
          </motion.h2>
          <motion.div variants={contactPageVariants.item} className="space-y-1">
            <h3 className="font-medium text-foreground">{t.cdmxName}</h3>
            <p className="text-sm text-muted-foreground">{offices.cdmx}</p>
          </motion.div>
          <motion.div variants={contactPageVariants.item} className="space-y-1">
            <h3 className="font-medium text-foreground">{t.gdlName}</h3>
            <p className="text-sm text-muted-foreground">{offices.gdl}</p>
          </motion.div>
          <motion.p variants={contactPageVariants.item} className="text-muted-foreground">
            {PHONE}
          </motion.p>
          <motion.a
            variants={contactPageVariants.item}
            href={`mailto:${EMAIL}`}
            className="inline-block text-muted-foreground transition-colors hover:text-foreground"
            whileHover={{ x: 2 }}
            transition={formFieldTransition}
          >
            {EMAIL}
          </motion.a>
          <motion.div variants={contactPageVariants.map} className="pt-2">
            <h3 className="mb-3 text-sm font-medium text-muted-foreground">{t.location}</h3>
            <OfficesMap />
          </motion.div>
        </motion.div>
        <motion.div variants={contactPageVariants.formColumn}>
          <Form {...form}>
            <motion.form
              onSubmit={form.handleSubmit(onSubmit, onError)}
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={contactPageVariants.container}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <motion.div variants={contactPageVariants.item}>
                    <FormItem>
                      <FormLabel>{t.nameLabel}</FormLabel>
                      <FormControl>
                        <Input placeholder={t.namePlaceholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </motion.div>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <motion.div variants={contactPageVariants.item}>
                    <FormItem>
                      <FormLabel>{t.phoneLabel}</FormLabel>
                      <FormControl>
                        <Input placeholder={t.phonePlaceholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </motion.div>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <motion.div variants={contactPageVariants.item}>
                    <FormItem>
                      <FormLabel>{t.emailLabel}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={t.emailPlaceholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </motion.div>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <motion.div variants={contactPageVariants.item}>
                    <FormItem>
                      <FormLabel>{t.messageLabel}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t.messagePlaceholder} rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </motion.div>
                )}
              />
              <motion.div
                variants={contactPageVariants.item}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={formFieldTransition}
                className="inline-block"
              >
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? t.sending : t.submit}
                </Button>
              </motion.div>
            </motion.form>
          </Form>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
