const API_BASE = import.meta.env.VITE_API_URL ?? '/api'

export interface ApiError {
  message: string
  code?: string
  status?: number
}

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const err: ApiError = {
      message: res.statusText,
      status: res.status,
    }
    try {
      const body = await res.json()
      if (body?.message) err.message = body.message
      if (body?.code) err.code = body.code
    } catch {
      // ignore
    }
    throw err
  }
  const contentType = res.headers.get('content-type')
  if (contentType?.includes('application/json')) {
    return res.json() as Promise<T>
  }
  return res.text() as Promise<T>
}

function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  }
  const token = localStorage.getItem('flowboard_token')
  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`
  }
  return headers
}

export const api = {
  get<T>(path: string, options?: RequestInit): Promise<T> {
    return fetch(`${API_BASE}${path}`, {
      ...options,
      method: 'GET',
      headers: getHeaders(),
    }).then(handleResponse<T>)
  },

  post<T>(path: string, body?: unknown, options?: RequestInit): Promise<T> {
    return fetch(`${API_BASE}${path}`, {
      ...options,
      method: 'POST',
      headers: getHeaders(),
      body: body !== undefined ? JSON.stringify(body) : undefined,
    }).then(handleResponse<T>)
  },

  put<T>(path: string, body?: unknown, options?: RequestInit): Promise<T> {
    return fetch(`${API_BASE}${path}`, {
      ...options,
      method: 'PUT',
      headers: getHeaders(),
      body: body !== undefined ? JSON.stringify(body) : undefined,
    }).then(handleResponse<T>)
  },

  patch<T>(path: string, body?: unknown, options?: RequestInit): Promise<T> {
    return fetch(`${API_BASE}${path}`, {
      ...options,
      method: 'PATCH',
      headers: getHeaders(),
      body: body !== undefined ? JSON.stringify(body) : undefined,
    }).then(handleResponse<T>)
  },

  delete<T>(path: string, options?: RequestInit): Promise<T> {
    return fetch(`${API_BASE}${path}`, {
      ...options,
      method: 'DELETE',
      headers: getHeaders(),
    }).then(handleResponse<T>)
  },
}
