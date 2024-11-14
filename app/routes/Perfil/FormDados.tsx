import { FormEvent, useState } from "react";
import { UserInterface } from "./Route";

interface FormDados {
    userData?: UserInterface
    updateData: (user: UserInterface | undefined) => void
}

export function FormDados(props: FormDados) {
    const [isEditing, setIsEditing] = useState(false);
    const handleSave = () => setIsEditing(false);


    function dateToString(data: Date | undefined) {
        if (data != undefined) {
            const actualDate = new Date(data)
            return String(actualDate.getUTCDate()).padStart(2, "0") +
                "/" +
                String(actualDate.getMonth() + 1).padStart(2, "0") +
                "/" +
                actualDate.getFullYear()
        }
    }

    function HandleUpdateForm(e?: FormEvent) {
        e?.preventDefault()

        console.log("Ta entrando aqui")

        const formData = new FormData(e?.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        const dataNascimento = new Date(String(data.dateOfBirth))

        const newDataUser: UserInterface | undefined = {
            nome: String(data.fullName),
            userName: String(data.username),
            dataNasc: dataNascimento,
            numCelular: String(data.phoneNumber),
            email: String(data.email)
        }

        console.log(newDataUser)

        props.updateData(newDataUser)

        return handleSave()
    }

    return (
        <>
            <div className="col-md-5">
                <br /><br /><br />
                <form onSubmit={HandleUpdateForm}>
                    <div className="text-start">
                        <div className="mb-3">
                            <strong>Nome:</strong>
                            {isEditing ? (
                                <input type="text" className="form-control mt-1" defaultValue={props.userData?.nome} name="fullName" />
                            ) : (
                                <p className="mt-1">{props.userData?.nome}</p>
                            )}
                        </div>
                        <div className="mb-3">
                            <strong>Usuário:</strong>
                            {isEditing ? (
                                <input type="text" className="form-control mt-1" defaultValue={props.userData?.userName} name="username" />
                            ) : (
                                <p className="mt-1">{props.userData?.userName}</p>
                            )}
                        </div>
                        <div className="mb-3">
                            <strong>Data de Nascimento:</strong>
                            {
                                isEditing ? (
                                    <input type="date" className="form-control mt-1" defaultValue={dateToString(props.userData?.dataNasc)} name="dateOfBirth" />
                                ) : (
                                    <p className="mt-1">{dateToString(props.userData?.dataNasc)}</p>
                                )}
                        </div>
                        <div className="mb-3">{/*  */}
                            <strong>Número de Celular:</strong>
                            {isEditing ? (
                                <input type="text" className="form-control mt-1" defaultValue={props.userData?.numCelular} name="phoneNumber" />
                            ) : (
                                <p className="mt-1">{props.userData?.numCelular}</p>
                            )}
                        </div>
                        <div className="mb-3">
                            <strong>E-mail:</strong>
                            {isEditing ? (
                                <input type="email" className="form-control mt-1" defaultValue={props.userData?.email} name="email" />
                            ) : (
                                <p className="mt-1">{props.userData?.email}</p>
                            )}
                        </div>
                    </div>
                    {
                        isEditing == true && (
                            <button className="btn btn-primary" type="submit">Salvar alterações</button>
                        )
                    }

                </form>
                <div className="text-start mt-3">
                    {isEditing == false && (
                        <button onClick={() => setIsEditing(true)} className="btn btn-primary" type="button">Editar dados</button>
                    )}
                </div>
            </div>
        </>
    )
}