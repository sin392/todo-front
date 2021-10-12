interface _TODOSchema {
	id: number
	subject: string
	description: string
}

export interface TODOSchema extends _TODOSchema {
	createdAt: string
	updatedAt: string
}

export interface ResponseTODOSchema extends _TODOSchema {
	created_at: string
	updated_at: string
}

export class TODO implements TODOSchema {
	id: number
	subject: string
	description: string
	createdAt: string
	updatedAt: string

	constructor(props: TODOSchema | ResponseTODOSchema) {
		this.id = props.id
		this.subject = props.subject
		this.description = props.description
		this.createdAt =
			(props as TODOSchema).createdAt ||
			(props as ResponseTODOSchema).created_at
		this.updatedAt =
			(props as TODOSchema).updatedAt ||
			(props as ResponseTODOSchema).updated_at
	}
}
