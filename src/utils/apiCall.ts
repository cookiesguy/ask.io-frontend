import { RequestMethod } from 'interface';
export async function fetchApi(
   url: string,
   method: RequestMethod,
   token: string | null,
   body: any
) {
   const bodyBuild = JSON.stringify(body);
   try {
      const res = await fetch(url, {
         method: method,
         body: bodyBuild,
         headers: {
            'Content-Type': 'application/json',
         },
      });

      const data = await res.json();

      return data;
   } catch (error) {
      alert(error);
   }
}

export async function getApi(url: string, token: string) {
   try {
      const res = await fetch(url, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
      });

      const data = await res.json();
      return data;
   } catch (error) {
      alert(error);
   }
}
