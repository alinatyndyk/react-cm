
import {useForm} from "react-hook-form"
import {createComments} from "../../services/comment.service";
function Comments(){

    const {register, handleSubmit, formState:{errors}} = useForm(
        {
            defaultValues:{
                title: 'title',
                body: 'body',
            }
        }
    )

    const submit = (obj) => {
        createComments(obj).then(({data}) => console.log(data))
    }

    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('title', {required: true})}/>
                {
                    errors.title && <span>field is required</span>
                }
                <input type="text" {...register('body')}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export {Comments};