import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vnnbuqxisuqjeeirqxgh.supabase.co/rest/v1/'
const supabaseKey = 'sb_publishable_N2QDwPZMvrrS0-c55TkScA_FxY9VBgC'

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
)