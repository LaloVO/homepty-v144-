import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Crea tu cuenta Gratis</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Input placeholder="Nombre completo" />
            </div>
            <div>
              <Input placeholder="Ciudad" />
            </div>
            <div>
              <Input type="email" placeholder="Email" />
            </div>
            <div>
              <Input type="password" placeholder="Contraseña" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm text-gray-500">
                Acepto los términos y condiciones
              </label>
            </div>
            <Button className="w-full">Siguiente</Button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-500">
            ¿Ya tienes una cuenta?{" "}
            <a href="#" className="text-blue-500">
              Inicia sesión
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

