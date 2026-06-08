/* ============================================================
   Tutorials library — Part 2.
   Expands each category to 40 entries. Appended to the main
   window.TUTORIALS array (loaded after tutorials-data.js).
   ============================================================ */
window.TUTORIALS.push(

  /* ===== PHP (+26) ===== */
  { cat:"PHP", lang:"php", title:"Common string functions", desc:"Measure, slice and replace text.",
    code:`$s = "Hello World";
echo strlen($s);              // 11
echo strtoupper($s);          // HELLO WORLD
echo substr($s, 0, 5);        // Hello
echo str_replace("World", "PHP", $s); // Hello PHP` },
  { cat:"PHP", lang:"php", title:"explode() and implode()", desc:"Convert between strings and arrays.",
    code:`$parts = explode(",", "a,b,c");   // ['a','b','c']
$csv   = implode("-", $parts);    // "a-b-c"` },
  { cat:"PHP", lang:"php", title:"Array push, pop, shift", desc:"Add and remove array items.",
    code:`$a = [1, 2, 3];
array_push($a, 4);   // [1,2,3,4]
array_pop($a);       // removes 4
array_unshift($a, 0);// [0,1,2,3]
array_shift($a);     // removes 0` },
  { cat:"PHP", lang:"php", title:"Sort arrays", desc:"Sort values, keys, or with a custom comparator.",
    code:`$n = [3, 1, 2];
sort($n);                       // [1,2,3]
rsort($n);                      // [3,2,1]
usort($n, fn($a, $b) => $b - $a); // custom desc` },
  { cat:"PHP", lang:"php", title:"Ternary & null coalescing", desc:"Concise conditionals and safe defaults.",
    code:`$role = $isAdmin ? "admin" : "user";
$name = $_GET['name'] ?? "Guest";   // default if missing
$x ??= 10;                          // assign if null` },
  { cat:"PHP", lang:"php", title:"Switch statement", desc:"Branch on a value.",
    code:`switch ($status) {
    case 'open':   $label = 'Open'; break;
    case 'done':   $label = 'Done'; break;
    default:       $label = 'Unknown';
}` },
  { cat:"PHP", lang:"php", title:"Loop arrays with foreach", desc:"Iterate values and keys.",
    code:`foreach ($users as $id => $user) {
    echo "$id: {$user['name']}\\n";
}` },
  { cat:"PHP", lang:"php", title:"Define a class", desc:"Properties, constructor and methods.",
    code:`class Task {
    public function __construct(
        public string $title,
        public string $status = 'open'
    ) {}
    public function complete(): void { $this->status = 'done'; }
}
$t = new Task('Design');` },
  { cat:"PHP", lang:"php", title:"Class inheritance", desc:"Reuse and extend behaviour.",
    code:`class Animal { public function speak() { return "..."; } }
class Dog extends Animal {
    public function speak() { return "Woof"; }
}` },
  { cat:"PHP", lang:"php", title:"Interfaces", desc:"Define a contract classes must follow.",
    code:`interface Payable { public function pay(int $amount): bool; }

class Wallet implements Payable {
    public function pay(int $amount): bool { return true; }
}` },
  { cat:"PHP", lang:"php", title:"Use a trait", desc:"Why: share methods across unrelated classes without inheritance.",
    code:`trait Timestamps {
    public function now(): string { return date('Y-m-d H:i:s'); }
}
class Post { use Timestamps; }` },
  { cat:"PHP", lang:"php", title:"Static properties & methods", desc:"Belong to the class, not an instance.",
    code:`class Counter {
    public static int $count = 0;
    public static function inc(): void { self::$count++; }
}
Counter::inc();
echo Counter::$count; // 1` },
  { cat:"PHP", lang:"php", title:"Typed properties & returns", desc:"Why: catch type errors early and self-document code.",
    code:`function add(int $a, int $b): int {
    return $a + $b;
}` },
  { cat:"PHP", lang:"php", title:"Enums (PHP 8.1)", desc:"A fixed set of named values.",
    code:`enum Status: string {
    case Open = 'open';
    case Done = 'done';
}
$s = Status::Open;
echo $s->value; // 'open'` },
  { cat:"PHP", lang:"php", title:"match expression (PHP 8)", desc:"Strict, expression-based alternative to switch.",
    code:`$label = match($status) {
    'open'        => 'Open',
    'done'        => 'Completed',
    default       => 'Unknown',
};` },
  { cat:"PHP", lang:"php", title:"Named arguments", desc:"Pass arguments by name for clarity.",
    code:`function make(string $title, bool $active = true) {}
make(title: "Task", active: false);` },
  { cat:"PHP", lang:"php", title:"Arrow functions", desc:"Short closures that capture outer scope automatically.",
    code:`$tax = 0.1;
$withTax = array_map(fn($p) => $p * (1 + $tax), $prices);` },
  { cat:"PHP", lang:"php", title:"Exception handling", desc:"Why: handle failures gracefully instead of crashing.",
    code:`try {
    $result = riskyCall();
} catch (\\Throwable $e) {
    log_message('error', $e->getMessage());
} finally {
    cleanup();
}` },
  { cat:"PHP", lang:"php", title:"Custom exception class", desc:"Throw meaningful, catchable errors.",
    code:`class NotFoundException extends \\Exception {}

throw new NotFoundException("User not found");` },
  { cat:"PHP", lang:"php", title:"Read query string", desc:"Get values from the URL.",
    code:`$page = (int) ($_GET['page'] ?? 1);
$q    = trim($_GET['q'] ?? '');` },
  { cat:"PHP", lang:"php", title:"Handle POST form data", desc:"Read submitted form fields safely.",
    code:`$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$msg   = trim($_POST['message'] ?? '');` },
  { cat:"PHP", lang:"php", title:"Redirect with header()", desc:"Send the user to another page.",
    code:`header('Location: /dashboard');
exit;` },
  { cat:"PHP", lang:"php", title:"Return a JSON API response", desc:"Output JSON with the right header.",
    code:`header('Content-Type: application/json');
echo json_encode(['ok' => true, 'data' => $items]);` },
  { cat:"PHP", lang:"php", title:"Calculate age from a date", desc:"Date math with DateTime.",
    code:`$dob = new DateTime('2000-05-20');
$age = $dob->diff(new DateTime())->y;` },
  { cat:"PHP", lang:"php", title:"Match patterns with regex", desc:"Validate or extract using preg_match.",
    code:`if (preg_match('/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$/i', $email)) {
    echo 'Valid email';
}` },
  { cat:"PHP", lang:"php", title:"Hashing data", desc:"One-way hashes for integrity (not passwords).",
    code:`$sha = hash('sha256', $data);
$etag = md5($content);` },

  /* ===== Laravel (+23) ===== */
  { cat:"Laravel", lang:"php", title:"One-to-many relationship", desc:"Why: model 'a user has many posts' cleanly.",
    code:`class User extends Model {
    public function posts() { return $this->hasMany(Post::class); }
}
$user->posts; // collection of posts` },
  { cat:"Laravel", lang:"php", title:"Many-to-many relationship", desc:"Link records through a pivot table.",
    code:`class User extends Model {
    public function roles() { return $this->belongsToMany(Role::class); }
}
$user->roles()->attach($roleId);` },
  { cat:"Laravel", lang:"php", title:"Attribute casting", desc:"Auto-convert columns to native types.",
    code:`protected $casts = [
    'is_admin'   => 'boolean',
    'meta'       => 'array',
    'created_at' => 'datetime',
];` },
  { cat:"Laravel", lang:"php", title:"Query scopes", desc:"Why: reuse common query filters with a readable name.",
    code:`public function scopeActive($query) {
    return $query->where('active', true);
}
// Usage: User::active()->get();` },
  { cat:"Laravel", lang:"php", title:"Soft deletes", desc:"Hide rows instead of deleting them.",
    code:`use Illuminate\\Database\\Eloquent\\SoftDeletes;
class Post extends Model { use SoftDeletes; }

$post->delete();          // sets deleted_at
Post::withTrashed()->get();` },
  { cat:"Laravel", lang:"php", title:"Form Request validation", desc:"Why: keep validation rules out of controllers.",
    code:`class StorePost extends FormRequest {
    public function rules() {
        return ['title' => 'required|max:255'];
    }
}
// Type-hint StorePost in the controller method.` },
  { cat:"Laravel", lang:"php", title:"Named routes", desc:"Reference routes by name, not URL.",
    code:`Route::get('/profile', [ProfileController::class, 'show'])->name('profile');
// In Blade: <a href="{{ route('profile') }}">Profile</a>` },
  { cat:"Laravel", lang:"php", title:"Blade components", desc:"Reusable UI pieces.",
    code:`{{-- resources/views/components/alert.blade.php --}}
<div class="alert">{{ $slot }}</div>

{{-- usage --}}
<x-alert>Saved!</x-alert>` },
  { cat:"Laravel", lang:"php", title:"Flash a session message", desc:"Show one-time feedback after an action.",
    code:`return redirect('/posts')->with('success', 'Post created!');
// In Blade: @if(session('success')) {{ session('success') }} @endif` },
  { cat:"Laravel", lang:"php", title:"Check authenticated user", desc:"Access the logged-in user.",
    code:`if (auth()->check()) {
    $id = auth()->id();
    $user = auth()->user();
}` },
  { cat:"Laravel", lang:"php", title:"Authorization with policies", desc:"Why: centralise 'can this user do X?' logic.",
    code:`// PostPolicy
public function update(User $user, Post $post) {
    return $user->id === $post->user_id;
}
// Controller: $this->authorize('update', $post);` },
  { cat:"Laravel", lang:"php", title:"Database transactions", desc:"All-or-nothing multi-step writes.",
    code:`use Illuminate\\Support\\Facades\\DB;
DB::transaction(function () {
    $order->save();
    $payment->save();
});` },
  { cat:"Laravel", lang:"php", title:"Work with collections", desc:"Fluent array helpers on query results.",
    code:`$titles = $posts->pluck('title');
$active = $users->filter(fn($u) => $u->active);
$names  = $users->map(fn($u) => $u->name);` },
  { cat:"Laravel", lang:"php", title:"Custom Artisan command", desc:"Automate tasks via the CLI.",
    code:`// php artisan make:command SendReports
public function handle() {
    $this->info('Reports sent!');
}
// run: php artisan send:reports` },
  { cat:"Laravel", lang:"php", title:"Schedule tasks (cron)", desc:"Run jobs automatically on a schedule.",
    code:`// app/Console/Kernel.php
$schedule->command('send:reports')->dailyAt('08:00');
// server cron: * * * * * php artisan schedule:run` },
  { cat:"Laravel", lang:"php", title:"Events & listeners", desc:"Why: decouple side effects like sending email.",
    code:`event(new UserRegistered($user));
// Listener handles sending the welcome email separately.` },
  { cat:"Laravel", lang:"php", title:"Cache values", desc:"Speed up by caching expensive results.",
    code:`use Illuminate\\Support\\Facades\\Cache;
$stats = Cache::remember('stats', 600, fn() => heavyQuery());` },
  { cat:"Laravel", lang:"php", title:"Eloquent where clauses", desc:"Filter queries fluently.",
    code:`User::where('active', true)
    ->whereIn('role', ['admin', 'editor'])
    ->orderBy('name')
    ->get();` },
  { cat:"Laravel", lang:"php", title:"API auth with Sanctum", desc:"Issue tokens for API/mobile clients.",
    code:`$token = $user->createToken('mobile')->plainTextToken;
// Protect routes: Route::middleware('auth:sanctum')->get(...);` },
  { cat:"Laravel", lang:"php", title:"Localization", desc:"Translate strings for multiple languages.",
    code:`// lang/en/messages.php => ['welcome' => 'Welcome']
echo __('messages.welcome');` },
  { cat:"Laravel", lang:"php", title:"Resource controller route", desc:"All CRUD routes in one line.",
    code:`Route::resource('posts', PostController::class);
// generates index, create, store, show, edit, update, destroy` },
  { cat:"Laravel", lang:"php", title:"Paginate an API", desc:"Return paged JSON with metadata.",
    code:`return Post::latest()->paginate(15);
// JSON includes data, current_page, total, etc.` },
  { cat:"Laravel", lang:"php", title:"Mass assignment protection", desc:"Why: prevent users setting fields they shouldn't.",
    code:`protected $fillable = ['title', 'body'];
Post::create($request->only(['title', 'body']));` },

  /* ===== CodeIgniter (+26) ===== */
  { cat:"CodeIgniter", lang:"php", title:"Load a helper", desc:"Bring procedural helper functions into scope.",
    code:`helper(['url', 'form']);
echo base_url('css/style.css');` },
  { cat:"CodeIgniter", lang:"php", title:"base_url vs site_url", desc:"Build asset and app URLs.",
    code:`echo base_url('img/logo.png');  // public root
echo site_url('users/5');       // routed app URL` },
  { cat:"CodeIgniter", lang:"php", title:"Open a form", desc:"Generate form markup with the form helper.",
    code:`echo form_open('users/save');
echo form_input('name', old('name'));
echo form_submit('go', 'Save');
echo form_close();` },
  { cat:"CodeIgniter", lang:"php", title:"Pass data to a view", desc:"Render a template with variables.",
    code:`return view('users/index', [
    'users' => $users,
    'title' => 'All Users',
]);` },
  { cat:"CodeIgniter", lang:"php", title:"View layouts", desc:"Share a master layout across pages.",
    code:`<?= $this->extend('layouts/main') ?>
<?= $this->section('content') ?>
  <h1>Dashboard</h1>
<?= $this->endSection() ?>` },
  { cat:"CodeIgniter", lang:"php", title:"View cells", desc:"Reusable, self-contained view fragments.",
    code:`// In a view:
<?= view_cell('App\\Cells\\MenuCell::render') ?>` },
  { cat:"CodeIgniter", lang:"php", title:"Model: find records", desc:"Read with the built-in model.",
    code:`$model = new TaskModel();
$one  = $model->find(1);
$all  = $model->findAll();
$open = $model->where('status', 'open')->findAll();` },
  { cat:"CodeIgniter", lang:"php", title:"Model: insert / update / delete", desc:"Write data through the model.",
    code:`$model->insert(['title' => 'New']);
$model->update(1, ['status' => 'done']);
$model->delete(1);` },
  { cat:"CodeIgniter", lang:"php", title:"Model validation rules", desc:"Why: validate automatically on save.",
    code:`protected $validationRules = [
    'title' => 'required|min_length[3]',
    'email' => 'required|valid_email',
];` },
  { cat:"CodeIgniter", lang:"php", title:"Use an Entity", desc:"Represent a row as a rich object.",
    code:`class User extends \\CodeIgniter\\Entity\\Entity {
    public function getFullName() {
        return $this->first . ' ' . $this->last;
    }
}` },
  { cat:"CodeIgniter", lang:"php", title:"Database seeder", desc:"Populate tables with sample data.",
    code:`// php spark make:seeder UserSeeder
$this->db->table('users')->insert(['name' => 'Dipak']);
// run: php spark db:seed UserSeeder` },
  { cat:"CodeIgniter", lang:"php", title:"Query Builder joins", desc:"Combine tables fluently.",
    code:`$db->table('tasks t')
   ->select('t.title, u.name')
   ->join('users u', 'u.id = t.user_id')
   ->get()->getResultArray();` },
  { cat:"CodeIgniter", lang:"php", title:"Filter, order & limit", desc:"Refine query results.",
    code:`$db->table('posts')
   ->like('title', 'php')
   ->orderBy('created_at', 'DESC')
   ->limit(10)->get()->getResult();` },
  { cat:"CodeIgniter", lang:"php", title:"Read request input", desc:"Safely access GET/POST/JSON.",
    code:`$name = $this->request->getPost('name');
$page = $this->request->getGet('page');
$body = $this->request->getJSON(true);` },
  { cat:"CodeIgniter", lang:"php", title:"Return JSON response", desc:"Respond with JSON and a status code.",
    code:`return $this->response
    ->setStatusCode(200)
    ->setJSON(['ok' => true, 'data' => $rows]);` },
  { cat:"CodeIgniter", lang:"php", title:"Redirect with data", desc:"Send the user back with flash data.",
    code:`return redirect()->to('/users')
    ->with('message', 'Saved successfully');` },
  { cat:"CodeIgniter", lang:"php", title:"Flash session data", desc:"One-request messages.",
    code:`session()->setFlashdata('error', 'Invalid input');
// In view: <?= session('error') ?>` },
  { cat:"CodeIgniter", lang:"php", title:"Routes with placeholders", desc:"Capture URL segments.",
    code:`$routes->get('users/(:num)', 'Users::show/$1');
$routes->get('posts/(:segment)', 'Posts::bySlug/$1');` },
  { cat:"CodeIgniter", lang:"php", title:"Group routes", desc:"Organise routes under a prefix/namespace.",
    code:`$routes->group('admin', ['namespace' => 'App\\Controllers\\Admin'],
  function ($routes) {
    $routes->get('users', 'Users::index');
});` },
  { cat:"CodeIgniter", lang:"php", title:"Create a custom filter", desc:"Run logic before/after controllers.",
    code:`class AuthFilter implements FilterInterface {
    public function before(RequestInterface $req, $args = null) {
        if (!session('user_id')) return redirect()->to('/login');
    }
    public function after(...$a) {}
}` },
  { cat:"CodeIgniter", lang:"php", title:"Custom spark command", desc:"Add your own CLI command.",
    code:`// php spark make:command MyTask
public function run(array $params) {
    CLI::write('Done!', 'green');
}` },
  { cat:"CodeIgniter", lang:"php", title:"Show pagination links", desc:"Render pager controls in a view.",
    code:`<?= $pager->links() ?>
// Controller passed: 'pager' => $model->pager` },
  { cat:"CodeIgniter", lang:"php", title:"Force a file download", desc:"Send a file as a download response.",
    code:`return $this->response->download('report.pdf', null);` },
  { cat:"CodeIgniter", lang:"php", title:"Validate an upload", desc:"Restrict file type and size.",
    code:`$rules = ['photo' => 'uploaded[photo]|max_size[photo,2048]|ext_in[photo,jpg,png]'];
if ($this->validate($rules)) { /* move file */ }` },
  { cat:"CodeIgniter", lang:"php", title:"Use a service", desc:"Access shared framework services.",
    code:`$validation = \\Config\\Services::validation();
$session    = \\Config\\Services::session();` },
  { cat:"CodeIgniter", lang:"php", title:"REST ResourceController", desc:"Build a CRUD API quickly.",
    code:`class Tasks extends \\CodeIgniter\\RESTful\\ResourceController {
    protected $modelName = TaskModel::class;
    protected $format = 'json';
    public function index() { return $this->respond($this->model->findAll()); }
}` },

  /* ===== REST API (+28) ===== */
  { cat:"REST API", lang:"text", title:"Design resource URLs", desc:"Why: predictable, noun-based URLs are the heart of REST.",
    code:`GET    /tasks         list tasks
GET    /tasks/1       one task
POST   /tasks         create
PUT    /tasks/1       replace
PATCH  /tasks/1       partial update
DELETE /tasks/1       remove` },
  { cat:"REST API", lang:"bash", title:"GET a collection vs one item", desc:"Read many or a single resource.",
    code:`curl https://api.example.com/tasks
curl https://api.example.com/tasks/1` },
  { cat:"REST API", lang:"bash", title:"POST to create a resource", desc:"Send JSON to create a record.",
    code:`curl -X POST https://api.example.com/tasks \\
  -H "Content-Type: application/json" \\
  -d '{"title":"New task"}'` },
  { cat:"REST API", lang:"bash", title:"PUT vs PATCH", desc:"Why: PUT replaces the whole resource, PATCH updates part.",
    code:`# Replace entire resource
curl -X PUT /tasks/1 -d '{"title":"A","status":"done"}'
# Update one field
curl -X PATCH /tasks/1 -d '{"status":"done"}'` },
  { cat:"REST API", lang:"bash", title:"DELETE a resource", desc:"Remove a record by id.",
    code:`curl -X DELETE https://api.example.com/tasks/1` },
  { cat:"REST API", lang:"text", title:"Filtering with query params", desc:"Let clients narrow results.",
    code:`GET /tasks?status=open&assignee=5
# Server reads query params and filters the query.` },
  { cat:"REST API", lang:"text", title:"Sorting results", desc:"Allow clients to order data.",
    code:`GET /tasks?sort=-created_at,title
# '-' prefix = descending; comma = multiple keys.` },
  { cat:"REST API", lang:"text", title:"Sparse fieldsets", desc:"Why: return only requested fields to save bandwidth.",
    code:`GET /tasks?fields=id,title
# Respond with just those fields.` },
  { cat:"REST API", lang:"text", title:"Content-Type & Accept", desc:"Negotiate request/response formats.",
    code:`Content-Type: application/json   (what you send)
Accept: application/json          (what you want back)` },
  { cat:"REST API", lang:"php", title:"Handle CORS preflight", desc:"Respond to the browser's OPTIONS check.",
    code:`if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    http_response_code(204);
    exit;
}` },
  { cat:"REST API", lang:"bash", title:"API key authentication", desc:"Identify clients with a key header.",
    code:`curl https://api.example.com/data \\
  -H "X-API-Key: your_api_key_here"` },
  { cat:"REST API", lang:"json", title:"Refresh token flow", desc:"Why: get new access tokens without re-login.",
    code:`POST /auth/refresh
{ "refresh_token": "long-lived-token" }
-> { "access_token": "new-short-lived-token" }` },
  { cat:"REST API", lang:"json", title:"Validation error (422)", desc:"Return field-level errors clearly.",
    code:`HTTP 422
{
  "message": "Validation failed",
  "errors": { "email": ["The email is required."] }
}` },
  { cat:"REST API", lang:"json", title:"Consistent success envelope", desc:"Wrap responses in a predictable shape.",
    code:`{
  "success": true,
  "data": { "id": 1, "title": "Task" },
  "meta": null
}` },
  { cat:"REST API", lang:"json", title:"HATEOAS links", desc:"Include links to related actions.",
    code:`{
  "id": 1,
  "title": "Task",
  "_links": {
    "self":   "/tasks/1",
    "delete": "/tasks/1"
  }
}` },
  { cat:"REST API", lang:"bash", title:"Caching with ETag", desc:"Why: avoid resending unchanged data.",
    code:`# Server sends:  ETag: "abc123"
# Client re-requests with:
curl -H 'If-None-Match: "abc123"' /tasks/1
# Server replies 304 Not Modified if unchanged.` },
  { cat:"REST API", lang:"text", title:"Rate limit headers", desc:"Tell clients their usage limits.",
    code:`X-RateLimit-Limit: 100
X-RateLimit-Remaining: 87
Retry-After: 30` },
  { cat:"REST API", lang:"text", title:"Idempotency keys", desc:"Why: safely retry POSTs without duplicates.",
    code:`POST /payments
Idempotency-Key: 7c1f-...   (unique per attempt)
# Server returns the same result for repeats.` },
  { cat:"REST API", lang:"js", title:"Receive a webhook", desc:"React to events pushed by another service.",
    code:`app.post('/webhooks/stripe', (req, res) => {
  const event = req.body;
  if (event.type === 'payment.succeeded') { /* fulfil */ }
  res.sendStatus(200);
});` },
  { cat:"REST API", lang:"bash", title:"File upload endpoint", desc:"Accept multipart form-data.",
    code:`curl -X POST /upload \\
  -F "file=@photo.jpg" \\
  -H "Authorization: Bearer TOKEN"` },
  { cat:"REST API", lang:"text", title:"Health check endpoint", desc:"Why: let monitors verify the API is alive.",
    code:`GET /health
-> 200 { "status": "ok", "uptime": 12345 }` },
  { cat:"REST API", lang:"yaml", title:"Document with OpenAPI", desc:"Describe your API in a standard spec.",
    code:`paths:
  /tasks:
    get:
      summary: List tasks
      responses:
        '200':
          description: A list of tasks` },
  { cat:"REST API", lang:"js", title:"Consume an API with fetch", desc:"Async GET with error handling.",
    code:`async function getTasks() {
  const res = await fetch('/api/tasks');
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json();
}` },
  { cat:"REST API", lang:"js", title:"Retry with backoff", desc:"Why: handle flaky networks gracefully.",
    code:`async function retry(fn, n = 3) {
  for (let i = 0; i < n; i++) {
    try { return await fn(); }
    catch (e) { if (i === n - 1) throw e;
      await new Promise(r => setTimeout(r, 2 ** i * 200)); }
  }
}` },
  { cat:"REST API", lang:"text", title:"Pagination with a cursor", desc:"Scale paging for large datasets.",
    code:`GET /tasks?limit=20&cursor=eyJpZCI6MTAwfQ
-> { data: [...], next_cursor: "eyJpZCI6MTIwfQ" }` },
  { cat:"REST API", lang:"text", title:"401 vs 403", desc:"Why: pick the right auth error.",
    code:`401 Unauthorized -> not logged in / bad token
403 Forbidden    -> logged in, but not allowed` },
  { cat:"REST API", lang:"text", title:"Stateless requests", desc:"Why: each request carries its own auth/context.",
    code:`Every request sends the token (e.g. Authorization header).
The server stores no session -> easy to scale horizontally.` },
  { cat:"REST API", lang:"js", title:"Set an Authorization header", desc:"Attach a bearer token to requests.",
    code:`fetch('/api/me', {
  headers: { Authorization: 'Bearer ' + token },
});` },

  /* ===== JavaScript (+24) ===== */
  { cat:"JavaScript", lang:"js", title:"Variable scope: let, const, var", desc:"Why: block scope prevents subtle bugs.",
    code:`if (true) {
  let a = 1;   // block-scoped
  var b = 2;   // function-scoped (leaks out)
}
console.log(typeof a); // undefined` },
  { cat:"JavaScript", lang:"js", title:"Ternary operator", desc:"Concise inline conditionals.",
    code:`const label = isDone ? 'Done' : 'Pending';` },
  { cat:"JavaScript", lang:"js", title:"Loop with for...of and for...in", desc:"Iterate values vs keys.",
    code:`for (const v of [10, 20]) console.log(v);      // values
for (const k in { a: 1, b: 2 }) console.log(k); // keys` },
  { cat:"JavaScript", lang:"js", title:"while and do...while", desc:"Loop until a condition is false.",
    code:`let i = 0;
while (i < 3) { console.log(i); i++; }` },
  { cat:"JavaScript", lang:"js", title:"find & findIndex", desc:"Locate an item or its position.",
    code:`const user = users.find(u => u.id === 5);
const idx  = users.findIndex(u => u.id === 5);` },
  { cat:"JavaScript", lang:"js", title:"some & every", desc:"Test if any or all items match.",
    code:`const hasAdmin = users.some(u => u.role === 'admin');
const allActive = users.every(u => u.active);` },
  { cat:"JavaScript", lang:"js", title:"includes & indexOf", desc:"Check membership in arrays/strings.",
    code:`[1, 2, 3].includes(2);        // true
'hello'.indexOf('ell');       // 1` },
  { cat:"JavaScript", lang:"js", title:"Sort with a comparator", desc:"Order numbers and objects correctly.",
    code:`[3, 1, 2].sort((a, b) => a - b);          // [1,2,3]
users.sort((a, b) => a.name.localeCompare(b.name));` },
  { cat:"JavaScript", lang:"js", title:"Object.keys / values / entries", desc:"Iterate object data.",
    code:`const o = { a: 1, b: 2 };
Object.keys(o);    // ['a','b']
Object.values(o);  // [1,2]
Object.entries(o); // [['a',1],['b',2]]` },
  { cat:"JavaScript", lang:"js", title:"Merge objects", desc:"Combine objects with spread.",
    code:`const merged = { ...defaults, ...overrides };` },
  { cat:"JavaScript", lang:"js", title:"String methods", desc:"Split, trim and replace text.",
    code:`'  a,b,c '.trim().split(',');     // ['a','b','c']
'Hello'.replace('l', 'L');        // 'HeLlo'
'abc'.toUpperCase();              // 'ABC'` },
  { cat:"JavaScript", lang:"js", title:"Format numbers", desc:"Currency and fixed decimals.",
    code:`(1234.5).toFixed(2);                       // '1234.50'
new Intl.NumberFormat('en-IN',
  { style: 'currency', currency: 'INR' }).format(2500);` },
  { cat:"JavaScript", lang:"js", title:"try/catch error handling", desc:"Handle runtime errors safely.",
    code:`try {
  JSON.parse(badInput);
} catch (err) {
  console.error('Invalid JSON:', err.message);
}` },
  { cat:"JavaScript", lang:"js", title:"Throw a custom error", desc:"Signal problems with meaning.",
    code:`function getAge(n) {
  if (n < 0) throw new Error('Age cannot be negative');
  return n;
}` },
  { cat:"JavaScript", lang:"js", title:"Closures in practice", desc:"A counter that remembers its state.",
    code:`function counter() {
  let n = 0;
  return () => ++n;
}
const next = counter();
next(); next(); // 1, then 2` },
  { cat:"JavaScript", lang:"js", title:"setInterval & clearInterval", desc:"Run code repeatedly, then stop.",
    code:`const id = setInterval(() => tick(), 1000);
setTimeout(() => clearInterval(id), 5000);` },
  { cat:"JavaScript", lang:"js", title:"Promise.all", desc:"Run async tasks in parallel.",
    code:`const [user, posts] = await Promise.all([
  fetch('/user').then(r => r.json()),
  fetch('/posts').then(r => r.json()),
]);` },
  { cat:"JavaScript", lang:"js", title:"Select DOM elements", desc:"Grab elements to manipulate.",
    code:`const btn  = document.querySelector('#save');
const rows = document.querySelectorAll('.row');` },
  { cat:"JavaScript", lang:"js", title:"Add an event listener", desc:"Respond to user actions.",
    code:`btn.addEventListener('click', () => {
  console.log('clicked');
});` },
  { cat:"JavaScript", lang:"js", title:"Toggle classes", desc:"Change styling dynamically.",
    code:`el.classList.add('active');
el.classList.remove('hidden');
el.classList.toggle('open');` },
  { cat:"JavaScript", lang:"js", title:"Create elements dynamically", desc:"Build DOM nodes in JS.",
    code:`const li = document.createElement('li');
li.textContent = 'New item';
list.appendChild(li);` },
  { cat:"JavaScript", lang:"js", title:"Handle a form submit", desc:"Intercept and process form data.",
    code:`form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  console.log(data.get('email'));
});` },
  { cat:"JavaScript", lang:"js", title:"Regular expressions", desc:"Test and extract patterns.",
    code:`/^\\d{6}$/.test('560001');          // true (6-digit pin)
'2026-06-08'.match(/\\d{4}/)[0];      // '2026'` },
  { cat:"JavaScript", lang:"js", title:"Copy text to clipboard", desc:"A common UI action.",
    code:`await navigator.clipboard.writeText('Copied!');` },

  /* ===== React (+24) ===== */
  { cat:"React", lang:"jsx", title:"Embed expressions in JSX", desc:"Show dynamic values in markup.",
    code:`const name = 'Dipak';
return <h1>Hello, {name.toUpperCase()}!</h1>;` },
  { cat:"React", lang:"jsx", title:"className and inline styles", desc:"Apply CSS in React.",
    code:`<div className="card" style={{ padding: 16, color: 'tomato' }}>
  Styled
</div>` },
  { cat:"React", lang:"jsx", title:"Handle click events", desc:"Respond to user interaction.",
    code:`<button onClick={() => setCount(c => c + 1)}>+1</button>` },
  { cat:"React", lang:"jsx", title:"Update state from previous", desc:"Why: avoid stale state in updates.",
    code:`setCount(prev => prev + 1);   // safe with batching` },
  { cat:"React", lang:"jsx", title:"Update object state", desc:"Replace immutably with spread.",
    code:`setUser(prev => ({ ...prev, name: 'New' }));` },
  { cat:"React", lang:"jsx", title:"Update array state", desc:"Add/remove without mutating.",
    code:`setItems(prev => [...prev, newItem]);            // add
setItems(prev => prev.filter(i => i.id !== id)); // remove` },
  { cat:"React", lang:"jsx", title:"Form with multiple inputs", desc:"Manage many fields with one state object.",
    code:`const [form, setForm] = useState({ name: '', email: '' });
const onChange = e =>
  setForm({ ...form, [e.target.name]: e.target.value });` },
  { cat:"React", lang:"jsx", title:"useEffect dependency array", desc:"Control when effects re-run.",
    code:`useEffect(() => { load(id); }, [id]); // runs when id changes` },
  { cat:"React", lang:"jsx", title:"Cleanup an effect", desc:"Remove listeners/timers on unmount.",
    code:`useEffect(() => {
  const t = setInterval(tick, 1000);
  return () => clearInterval(t);
}, []);` },
  { cat:"React", lang:"jsx", title:"Conditional class names", desc:"Toggle classes based on state.",
    code:`<li className={isActive ? 'item active' : 'item'}>Row</li>` },
  { cat:"React", lang:"jsx", title:"Use a Fragment", desc:"Return siblings without a wrapper div.",
    code:`return (
  <>
    <Header />
    <Main />
  </>
);` },
  { cat:"React", lang:"jsx", title:"The children prop", desc:"Build flexible wrapper components.",
    code:`function Card({ children }) {
  return <div className="card">{children}</div>;
}
<Card><p>Body</p></Card>` },
  { cat:"React", lang:"jsx", title:"Default prop values", desc:"Fallbacks via destructuring.",
    code:`function Badge({ color = 'gray', children }) {
  return <span className={color}>{children}</span>;
}` },
  { cat:"React", lang:"jsx", title:"Create a Context", desc:"Set up shared global state.",
    code:`const AuthContext = createContext(null);

<AuthContext.Provider value={user}>
  <App />
</AuthContext.Provider>` },
  { cat:"React", lang:"jsx", title:"Consume Context", desc:"Read shared data anywhere.",
    code:`const user = useContext(AuthContext);` },
  { cat:"React", lang:"jsx", title:"Memoize a value", desc:"Skip expensive recalculation.",
    code:`const total = useMemo(
  () => items.reduce((s, i) => s + i.price, 0),
  [items]
);` },
  { cat:"React", lang:"jsx", title:"Stable callback with useCallback", desc:"Why: prevent child re-renders.",
    code:`const onSave = useCallback(() => save(id), [id]);` },
  { cat:"React", lang:"jsx", title:"Controlled checkbox & select", desc:"Bind form controls to state.",
    code:`<input type="checkbox" checked={agree}
  onChange={e => setAgree(e.target.checked)} />
<select value={role} onChange={e => setRole(e.target.value)}>
  <option value="admin">Admin</option>
</select>` },
  { cat:"React", lang:"jsx", title:"Loading & error state", desc:"Handle async UI states.",
    code:`if (loading) return <Spinner />;
if (error)   return <p>{error}</p>;
return <List data={data} />;` },
  { cat:"React", lang:"jsx", title:"Read route params", desc:"Access URL parameters with React Router.",
    code:`import { useParams } from 'react-router-dom';
const { id } = useParams();` },
  { cat:"React", lang:"jsx", title:"Navigate programmatically", desc:"Redirect after an action.",
    code:`import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/dashboard');` },
  { cat:"React", lang:"jsx", title:"Build a useFetch hook", desc:"Reuse data-fetching logic.",
    code:`function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => { fetch(url).then(r => r.json()).then(setData); }, [url]);
  return data;
}` },
  { cat:"React", lang:"jsx", title:"Render a list with map", desc:"Turn data into elements with keys.",
    code:`<ul>{tasks.map(t => <li key={t.id}>{t.title}</li>)}</ul>` },
  { cat:"React", lang:"jsx", title:"Toggle boolean state", desc:"Show/hide UI cleanly.",
    code:`const [open, setOpen] = useState(false);
<button onClick={() => setOpen(o => !o)}>Toggle</button>` },

  /* ===== React Native (+26) ===== */
  { cat:"React Native", lang:"jsx", title:"Flexbox layout", desc:"RN uses Flexbox; column is the default direction.",
    code:`<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
  <Text>Left</Text><Text>Right</Text>
</View>` },
  { cat:"React Native", lang:"jsx", title:"Combine multiple styles", desc:"Apply an array of styles.",
    code:`<View style={[styles.box, isActive && styles.active]} />` },
  { cat:"React Native", lang:"jsx", title:"Pressable button", desc:"Modern touch handling with feedback.",
    code:`<Pressable onPress={save} style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}>
  <Text>Save</Text>
</Pressable>` },
  { cat:"React Native", lang:"jsx", title:"Show an Alert", desc:"Native confirm/alert dialogs.",
    code:`import { Alert } from 'react-native';
Alert.alert('Delete?', 'This cannot be undone', [
  { text: 'Cancel' },
  { text: 'OK', onPress: () => remove() },
]);` },
  { cat:"React Native", lang:"jsx", title:"SectionList", desc:"Render grouped lists with headers.",
    code:`<SectionList
  sections={[{ title: 'A', data: ['Apple'] }]}
  keyExtractor={(i, idx) => i + idx}
  renderItem={({ item }) => <Text>{item}</Text>}
  renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
/>` },
  { cat:"React Native", lang:"jsx", title:"Pull to refresh", desc:"Refresh a list by pulling down.",
    code:`<FlatList
  data={data}
  refreshControl={
    <RefreshControl refreshing={loading} onRefresh={reload} />
  }
  renderItem={renderItem}
/>` },
  { cat:"React Native", lang:"jsx", title:"KeyboardAvoidingView", desc:"Keep inputs visible above the keyboard.",
    code:`<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
  <TextInput placeholder="Message" />
</KeyboardAvoidingView>` },
  { cat:"React Native", lang:"jsx", title:"Switch toggle", desc:"A native on/off control.",
    code:`<Switch value={on} onValueChange={setOn} />` },
  { cat:"React Native", lang:"jsx", title:"Window dimensions", desc:"Respond to screen size.",
    code:`import { useWindowDimensions } from 'react-native';
const { width, height } = useWindowDimensions();` },
  { cat:"React Native", lang:"jsx", title:"Open a URL", desc:"Launch links, phone or email.",
    code:`import { Linking } from 'react-native';
Linking.openURL('https://example.com');
Linking.openURL('tel:+919999999999');` },
  { cat:"React Native", lang:"jsx", title:"Pass params between screens", desc:"Send and read navigation data.",
    code:`navigation.navigate('Details', { id: 7 });
// In Details:
const { id } = route.params;` },
  { cat:"React Native", lang:"jsx", title:"Bottom tab navigation", desc:"Tabbed app structure.",
    code:`const Tab = createBottomTabNavigator();
<Tab.Navigator>
  <Tab.Screen name="Home" component={Home} />
  <Tab.Screen name="Profile" component={Profile} />
</Tab.Navigator>` },
  { cat:"React Native", lang:"jsx", title:"Style the StatusBar", desc:"Control the top system bar.",
    code:`import { StatusBar } from 'react-native';
<StatusBar barStyle="light-content" backgroundColor="#0a0a12" />` },
  { cat:"React Native", lang:"jsx", title:"Vector icons", desc:"Use scalable icon sets.",
    code:`import Icon from 'react-native-vector-icons/Ionicons';
<Icon name="heart" size={24} color="tomato" />` },
  { cat:"React Native", lang:"jsx", title:"Store a JSON object", desc:"Persist structured data locally.",
    code:`await AsyncStorage.setItem('user', JSON.stringify(user));
const user = JSON.parse(await AsyncStorage.getItem('user'));` },
  { cat:"React Native", lang:"jsx", title:"POST to an API", desc:"Send data from the app.",
    code:`await fetch('https://api.example.com/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title }),
});` },
  { cat:"React Native", lang:"jsx", title:"Conditional rendering", desc:"Show UI based on state.",
    code:`{loading ? <ActivityIndicator /> : <List data={data} />}` },
  { cat:"React Native", lang:"jsx", title:"Image background", desc:"Render content over an image.",
    code:`<ImageBackground source={{ uri }} style={{ flex: 1 }}>
  <Text>Overlay text</Text>
</ImageBackground>` },
  { cat:"React Native", lang:"jsx", title:"TouchableOpacity feedback", desc:"Dim an element on press.",
    code:`<TouchableOpacity activeOpacity={0.7} onPress={go}>
  <Text>Tap me</Text>
</TouchableOpacity>` },
  { cat:"React Native", lang:"jsx", title:"Run code on mount", desc:"Load data when a screen opens.",
    code:`useEffect(() => { fetchData(); }, []);` },
  { cat:"React Native", lang:"jsx", title:"Simple form validation", desc:"Validate before submitting.",
    code:`const submit = () => {
  if (!email.includes('@')) return setError('Invalid email');
  setError(''); save();
};` },
  { cat:"React Native", lang:"jsx", title:"Map a list without FlatList", desc:"For short, static lists.",
    code:`{items.map(item => (
  <Text key={item.id}>{item.title}</Text>
))}` },
  { cat:"React Native", lang:"jsx", title:"Custom screen header", desc:"Configure the navigation header.",
    code:`<Stack.Screen name="Home" component={Home}
  options={{ title: 'Dashboard', headerStyle: { backgroundColor: '#7c5cff' } }}
/>` },
  { cat:"React Native", lang:"jsx", title:"Scroll a long screen", desc:"Make content scrollable.",
    code:`<ScrollView contentContainerStyle={{ padding: 16 }}>
  {children}
</ScrollView>` },
  { cat:"React Native", lang:"bash", title:"Read environment config", desc:"Keep API keys per environment.",
    code:`// .env  ->  API_URL=https://api.example.com
import Config from 'react-native-config';
fetch(Config.API_URL + '/tasks');` },
  { cat:"React Native", lang:"jsx", title:"Disable a button while loading", desc:"Prevent double submits.",
    code:`<Pressable disabled={loading} onPress={submit}>
  <Text>{loading ? 'Saving...' : 'Save'}</Text>
</Pressable>` },

  /* ===== Node.js (+28) ===== */
  { cat:"Node.js", lang:"js", title:"Parse a JSON request body", desc:"Read POST data in Express.",
    code:`app.use(express.json());
app.post('/tasks', (req, res) => res.json(req.body));` },
  { cat:"Node.js", lang:"js", title:"Route parameters", desc:"Capture parts of the URL.",
    code:`app.get('/users/:id', (req, res) => {
  res.json({ id: req.params.id });
});` },
  { cat:"Node.js", lang:"js", title:"Query parameters", desc:"Read values from the query string.",
    code:`// GET /search?q=php&page=2
app.get('/search', (req, res) => {
  const { q, page } = req.query;
  res.json({ q, page });
});` },
  { cat:"Node.js", lang:"js", title:"Split routes into a router", desc:"Why: keep large apps organised.",
    code:`// routes/users.js
const router = require('express').Router();
router.get('/', list);
module.exports = router;
// app.js: app.use('/users', require('./routes/users'));` },
  { cat:"Node.js", lang:"js", title:"Serve static files", desc:"Host images, CSS and the frontend.",
    code:`app.use(express.static('public'));
// files in /public are served at the root URL` },
  { cat:"Node.js", lang:"js", title:"Error-handling middleware", desc:"Centralise error responses.",
    code:`app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});` },
  { cat:"Node.js", lang:"js", title:"404 handler", desc:"Catch unmatched routes.",
    code:`app.use((req, res) => res.status(404).json({ error: 'Not found' }));` },
  { cat:"Node.js", lang:"js", title:"Async route with error catch", desc:"Forward async errors to middleware.",
    code:`app.get('/data', async (req, res, next) => {
  try { res.json(await getData()); }
  catch (e) { next(e); }
});` },
  { cat:"Node.js", lang:"js", title:"Connect with Mongoose", desc:"Use MongoDB from Node.",
    code:`const mongoose = require('mongoose');
await mongoose.connect(process.env.MONGO_URI);` },
  { cat:"Node.js", lang:"js", title:"Express CRUD routes", desc:"A full resource in one file.",
    code:`app.get('/tasks', list);
app.post('/tasks', create);
app.get('/tasks/:id', show);
app.put('/tasks/:id', update);
app.delete('/tasks/:id', destroy);` },
  { cat:"Node.js", lang:"js", title:"JWT verify middleware", desc:"Protect routes with a token check.",
    code:`function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  try { req.user = jwt.verify(token, process.env.JWT_SECRET); next(); }
  catch { res.sendStatus(401); }
}` },
  { cat:"Node.js", lang:"js", title:"Register: hash a password", desc:"Store credentials securely.",
    code:`const hash = await bcrypt.hash(req.body.password, 10);
await User.create({ email: req.body.email, password: hash });` },
  { cat:"Node.js", lang:"js", title:"Login: verify & issue token", desc:"Authenticate and return a JWT.",
    code:`const ok = await bcrypt.compare(password, user.password);
if (!ok) return res.sendStatus(401);
const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
res.json({ token });` },
  { cat:"Node.js", lang:"js", title:"Read & write JSON files", desc:"Simple file-based storage.",
    code:`const fs = require('fs/promises');
const data = JSON.parse(await fs.readFile('db.json', 'utf8'));
await fs.writeFile('db.json', JSON.stringify(data, null, 2));` },
  { cat:"Node.js", lang:"js", title:"Log requests with morgan", desc:"See incoming traffic during dev.",
    code:`const morgan = require('morgan');
app.use(morgan('dev'));` },
  { cat:"Node.js", lang:"js", title:"Add security headers", desc:"Why: protect against common attacks.",
    code:`const helmet = require('helmet');
app.use(helmet());` },
  { cat:"Node.js", lang:"js", title:"Rate limit requests", desc:"Throttle abusive clients.",
    code:`const rateLimit = require('express-rate-limit');
app.use(rateLimit({ windowMs: 60000, max: 100 }));` },
  { cat:"Node.js", lang:"js", title:"Work with the path module", desc:"Build cross-platform file paths.",
    code:`const path = require('path');
const file = path.join(__dirname, 'uploads', 'a.jpg');` },
  { cat:"Node.js", lang:"js", title:"List & create directories", desc:"Filesystem operations.",
    code:`const fs = require('fs/promises');
await fs.mkdir('uploads', { recursive: true });
const files = await fs.readdir('uploads');` },
  { cat:"Node.js", lang:"js", title:"EventEmitter", desc:"Emit and listen for custom events.",
    code:`const { EventEmitter } = require('events');
const bus = new EventEmitter();
bus.on('paid', order => fulfil(order));
bus.emit('paid', order);` },
  { cat:"Node.js", lang:"js", title:"Pipe a stream", desc:"Efficiently move data between sources.",
    code:`const fs = require('fs');
fs.createReadStream('big.csv').pipe(fs.createWriteStream('copy.csv'));` },
  { cat:"Node.js", lang:"js", title:"Run a shell command", desc:"Execute system commands from Node.",
    code:`const { exec } = require('child_process');
exec('git rev-parse HEAD', (err, stdout) => console.log(stdout));` },
  { cat:"Node.js", lang:"js", title:"Schedule a cron job", desc:"Run tasks on a timetable.",
    code:`const cron = require('node-cron');
cron.schedule('0 8 * * *', () => sendDailyReport());` },
  { cat:"Node.js", lang:"js", title:"Real-time with Socket.IO", desc:"Push events to clients instantly.",
    code:`const io = require('socket.io')(server);
io.on('connection', socket => {
  socket.emit('welcome', 'Hi!');
});` },
  { cat:"Node.js", lang:"js", title:"Make an HTTP request", desc:"Call other APIs from the server.",
    code:`const axios = require('axios');
const { data } = await axios.get('https://api.example.com/users');` },
  { cat:"Node.js", lang:"js", title:"Validate request input", desc:"Reject bad data early.",
    code:`const { body, validationResult } = require('express-validator');
app.post('/users', body('email').isEmail(), (req, res) => {
  if (!validationResult(req).isEmpty()) return res.sendStatus(422);
});` },
  { cat:"Node.js", lang:"js", title:"Graceful shutdown", desc:"Why: close connections cleanly on exit.",
    code:`process.on('SIGTERM', async () => {
  await server.close();
  await db.disconnect();
  process.exit(0);
});` },
  { cat:"Node.js", lang:"js", title:"Environment-based config", desc:"Switch behaviour per environment.",
    code:`const isProd = process.env.NODE_ENV === 'production';
const url = isProd ? process.env.PROD_DB : process.env.DEV_DB;` },

  /* ===== MySQL (+26) ===== */
  { cat:"MySQL", lang:"sql", title:"Select specific columns", desc:"Fetch only what you need.",
    code:`SELECT id, title FROM tasks;` },
  { cat:"MySQL", lang:"sql", title:"AND / OR conditions", desc:"Combine filters.",
    code:`SELECT * FROM tasks
WHERE status = 'open' AND (priority = 1 OR due_date < NOW());` },
  { cat:"MySQL", lang:"sql", title:"IN operator", desc:"Match any value in a list.",
    code:`SELECT * FROM users WHERE role IN ('admin', 'editor');` },
  { cat:"MySQL", lang:"sql", title:"BETWEEN range", desc:"Filter within an inclusive range.",
    code:`SELECT * FROM orders WHERE total BETWEEN 100 AND 500;` },
  { cat:"MySQL", lang:"sql", title:"Order by multiple columns", desc:"Sort by more than one field.",
    code:`SELECT * FROM tasks ORDER BY priority DESC, created_at ASC;` },
  { cat:"MySQL", lang:"sql", title:"Pagination with LIMIT/OFFSET", desc:"Fetch one page of results.",
    code:`SELECT * FROM posts ORDER BY id DESC LIMIT 10 OFFSET 20;` },
  { cat:"MySQL", lang:"sql", title:"DISTINCT values", desc:"Remove duplicate rows.",
    code:`SELECT DISTINCT country FROM customers;` },
  { cat:"MySQL", lang:"sql", title:"Aggregate functions", desc:"Sum, average, min and max.",
    code:`SELECT SUM(total) AS revenue, AVG(total) AS avg,
       MIN(total) AS lowest, MAX(total) AS highest
FROM orders;` },
  { cat:"MySQL", lang:"sql", title:"HAVING after GROUP BY", desc:"Filter grouped results.",
    code:`SELECT user_id, COUNT(*) AS n FROM tasks
GROUP BY user_id HAVING n > 5;` },
  { cat:"MySQL", lang:"sql", title:"LEFT JOIN", desc:"Keep all left rows, even unmatched.",
    code:`SELECT u.name, o.id FROM users u
LEFT JOIN orders o ON o.user_id = u.id;` },
  { cat:"MySQL", lang:"sql", title:"Self join", desc:"Join a table to itself.",
    code:`SELECT e.name, m.name AS manager
FROM employees e
JOIN employees m ON e.manager_id = m.id;` },
  { cat:"MySQL", lang:"sql", title:"Subquery", desc:"Use one query's result in another.",
    code:`SELECT * FROM products
WHERE price > (SELECT AVG(price) FROM products);` },
  { cat:"MySQL", lang:"sql", title:"UNION", desc:"Combine results of two queries.",
    code:`SELECT name FROM customers
UNION
SELECT name FROM suppliers;` },
  { cat:"MySQL", lang:"sql", title:"CASE expression", desc:"Inline conditional logic.",
    code:`SELECT title,
  CASE WHEN priority = 1 THEN 'High' ELSE 'Normal' END AS level
FROM tasks;` },
  { cat:"MySQL", lang:"sql", title:"Handle NULLs", desc:"Provide defaults for missing data.",
    code:`SELECT name, IFNULL(phone, 'N/A') AS phone FROM users
WHERE email IS NOT NULL;` },
  { cat:"MySQL", lang:"sql", title:"String functions", desc:"Concatenate and slice text.",
    code:`SELECT CONCAT(first, ' ', last) AS full_name,
       UPPER(email), SUBSTRING(title, 1, 20)
FROM users;` },
  { cat:"MySQL", lang:"sql", title:"Date functions", desc:"Work with dates and intervals.",
    code:`SELECT NOW(), CURDATE(),
       DATEDIFF(NOW(), created_at) AS age_days
FROM orders;` },
  { cat:"MySQL", lang:"sql", title:"Unique constraint", desc:"Why: prevent duplicate values.",
    code:`ALTER TABLE users ADD CONSTRAINT uq_email UNIQUE (email);` },
  { cat:"MySQL", lang:"sql", title:"Default column values", desc:"Set values automatically.",
    code:`CREATE TABLE tasks (
  status VARCHAR(20) DEFAULT 'open',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);` },
  { cat:"MySQL", lang:"sql", title:"AUTO_INCREMENT id", desc:"Auto-generate primary keys.",
    code:`CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);` },
  { cat:"MySQL", lang:"sql", title:"Create a view", desc:"Save a query as a virtual table.",
    code:`CREATE VIEW open_tasks AS
SELECT * FROM tasks WHERE status = 'open';
SELECT * FROM open_tasks;` },
  { cat:"MySQL", lang:"sql", title:"Stored procedure", desc:"Reusable server-side logic.",
    code:`DELIMITER //
CREATE PROCEDURE getUser(IN uid INT)
BEGIN SELECT * FROM users WHERE id = uid; END //
DELIMITER ;
CALL getUser(1);` },
  { cat:"MySQL", lang:"sql", title:"Create a trigger", desc:"Run logic automatically on changes.",
    code:`CREATE TRIGGER log_insert AFTER INSERT ON tasks
FOR EACH ROW
INSERT INTO audit(task_id, action) VALUES (NEW.id, 'created');` },
  { cat:"MySQL", lang:"sql", title:"Analyse a query with EXPLAIN", desc:"Why: spot slow queries and missing indexes.",
    code:`EXPLAIN SELECT * FROM tasks WHERE status = 'open';` },
  { cat:"MySQL", lang:"bash", title:"Back up & restore a database", desc:"Export and import with mysqldump.",
    code:`mysqldump -u root -p mydb > backup.sql
mysql -u root -p mydb < backup.sql` },
  { cat:"MySQL", lang:"sql", title:"Update with a join", desc:"Update rows based on another table.",
    code:`UPDATE tasks t
JOIN users u ON u.id = t.user_id
SET t.team = u.team;` },

  /* ===== MongoDB (+28) ===== */
  { cat:"MongoDB", lang:"js", title:"Insert many documents", desc:"Add several records at once.",
    code:`await Task.insertMany([
  { title: 'A' }, { title: 'B' },
]);` },
  { cat:"MongoDB", lang:"js", title:"Find one document", desc:"Fetch a single match.",
    code:`const user = await User.findOne({ email: 'a@b.com' });` },
  { cat:"MongoDB", lang:"js", title:"Update many documents", desc:"Modify all matching records.",
    code:`await Task.updateMany({ status: 'open' }, { $set: { status: 'archived' } });` },
  { cat:"MongoDB", lang:"js", title:"Delete many documents", desc:"Remove all matches.",
    code:`await Task.deleteMany({ status: 'archived' });` },
  { cat:"MongoDB", lang:"js", title:"Count documents", desc:"Get the number of matches.",
    code:`const total = await Task.countDocuments({ status: 'open' });` },
  { cat:"MongoDB", lang:"js", title:"Distinct values", desc:"List unique field values.",
    code:`const statuses = await Task.distinct('status');` },
  { cat:"MongoDB", lang:"js", title:"Projection (select fields)", desc:"Return only chosen fields.",
    code:`await User.find({}, 'name email');   // include name & email only` },
  { cat:"MongoDB", lang:"js", title:"$set update", desc:"Change specific fields.",
    code:`await Task.updateOne({ _id: id }, { $set: { status: 'done' } });` },
  { cat:"MongoDB", lang:"js", title:"$push to an array", desc:"Append to an array field.",
    code:`await Post.updateOne({ _id: id }, { $push: { tags: 'php' } });` },
  { cat:"MongoDB", lang:"js", title:"$pull from an array", desc:"Remove items from an array.",
    code:`await Post.updateOne({ _id: id }, { $pull: { tags: 'php' } });` },
  { cat:"MongoDB", lang:"js", title:"$inc a counter", desc:"Atomically increase a number.",
    code:`await Post.updateOne({ _id: id }, { $inc: { views: 1 } });` },
  { cat:"MongoDB", lang:"js", title:"Upsert", desc:"Update if exists, else insert.",
    code:`await Setting.updateOne(
  { key: 'theme' },
  { $set: { value: 'dark' } },
  { upsert: true }
);` },
  { cat:"MongoDB", lang:"js", title:"Regex search", desc:"Case-insensitive text matching.",
    code:`await User.find({ name: { $regex: 'dip', $options: 'i' } });` },
  { cat:"MongoDB", lang:"js", title:"$in and $nin", desc:"Match (or exclude) a set of values.",
    code:`await Task.find({ status: { $in: ['open', 'review'] } });
await Task.find({ status: { $nin: ['done'] } });` },
  { cat:"MongoDB", lang:"js", title:"Range queries", desc:"Greater/less than comparisons.",
    code:`await Product.find({ price: { $gte: 100, $lte: 500 } });` },
  { cat:"MongoDB", lang:"js", title:"$or query", desc:"Match any of several conditions.",
    code:`await User.find({ $or: [{ role: 'admin' }, { active: true }] });` },
  { cat:"MongoDB", lang:"js", title:"Sort results", desc:"Order ascending or descending.",
    code:`await Task.find().sort({ createdAt: -1 }); // newest first` },
  { cat:"MongoDB", lang:"js", title:"Paginate with skip & limit", desc:"Fetch one page.",
    code:`const page = 2, size = 10;
await Task.find().skip((page - 1) * size).limit(size);` },
  { cat:"MongoDB", lang:"js", title:"Group with aggregation", desc:"Count documents per group.",
    code:`await Task.aggregate([
  { $group: { _id: '$status', total: { $sum: 1 } } },
]);` },
  { cat:"MongoDB", lang:"js", title:"Match then group", desc:"Filter before aggregating.",
    code:`await Order.aggregate([
  { $match: { paid: true } },
  { $group: { _id: '$userId', spent: { $sum: '$total' } } },
]);` },
  { cat:"MongoDB", lang:"js", title:"$lookup (join)", desc:"Join another collection.",
    code:`await Order.aggregate([
  { $lookup: { from: 'users', localField: 'userId',
               foreignField: '_id', as: 'user' } },
]);` },
  { cat:"MongoDB", lang:"js", title:"$project fields", desc:"Reshape aggregation output.",
    code:`await User.aggregate([
  { $project: { name: 1, year: { $year: '$createdAt' } } },
]);` },
  { cat:"MongoDB", lang:"js", title:"Required schema fields", desc:"Why: enforce data shape with Mongoose.",
    code:`const schema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});` },
  { cat:"MongoDB", lang:"js", title:"Automatic timestamps", desc:"Track created/updated times.",
    code:`new mongoose.Schema({ title: String }, { timestamps: true });` },
  { cat:"MongoDB", lang:"js", title:"Virtual properties", desc:"Computed fields not stored in the DB.",
    code:`schema.virtual('fullName').get(function () {
  return this.first + ' ' + this.last;
});` },
  { cat:"MongoDB", lang:"js", title:"Pre-save hook", desc:"Run logic before saving (e.g. hash password).",
    code:`schema.pre('save', async function () {
  if (this.isModified('password'))
    this.password = await bcrypt.hash(this.password, 10);
});` },
  { cat:"MongoDB", lang:"js", title:"Reference & populate", desc:"Link and expand related documents.",
    code:`const schema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
await Post.find().populate('author');` },
  { cat:"MongoDB", lang:"js", title:"Create an index", desc:"Why: speed up frequent queries.",
    code:`schema.index({ email: 1 }, { unique: true });` },

  /* ===== HTML (+28) ===== */
  { cat:"HTML", lang:"html", title:"Headings h1–h6", desc:"Structure content by importance.",
    code:`<h1>Page title</h1>
<h2>Section</h2>
<h3>Subsection</h3>` },
  { cat:"HTML", lang:"html", title:"Text formatting", desc:"Emphasis and importance.",
    code:`<p>This is <strong>important</strong> and <em>emphasised</em>.</p>
<p>Sub<sub>script</sub> and Sup<sup>erscript</sup>.</p>` },
  { cat:"HTML", lang:"html", title:"Anchor target & rel", desc:"Open links safely in a new tab.",
    code:`<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Visit
</a>` },
  { cat:"HTML", lang:"html", title:"Figure with caption", desc:"Associate an image with a caption.",
    code:`<figure>
  <img src="chart.png" alt="Sales chart">
  <figcaption>Q1 sales</figcaption>
</figure>` },
  { cat:"HTML", lang:"html", title:"Nested lists", desc:"Group items hierarchically.",
    code:`<ul>
  <li>Frontend
    <ul><li>React</li><li>Vue</li></ul>
  </li>
</ul>` },
  { cat:"HTML", lang:"html", title:"Description list", desc:"Term and definition pairs.",
    code:`<dl>
  <dt>HTML</dt><dd>Markup language</dd>
  <dt>CSS</dt><dd>Styling language</dd>
</dl>` },
  { cat:"HTML", lang:"html", title:"Table with colspan", desc:"Merge cells across columns.",
    code:`<table>
  <tr><th colspan="2">Name</th></tr>
  <tr><td>Dipak</td><td>Barman</td></tr>
</table>` },
  { cat:"HTML", lang:"html", title:"Form labels & fieldset", desc:"Why: labels improve accessibility.",
    code:`<fieldset>
  <legend>Login</legend>
  <label for="u">User</label>
  <input id="u" name="user">
</fieldset>` },
  { cat:"HTML", lang:"html", title:"Select dropdown", desc:"Choose from options.",
    code:`<select name="role">
  <option value="admin">Admin</option>
  <option value="user" selected>User</option>
</select>` },
  { cat:"HTML", lang:"html", title:"Radio buttons", desc:"Pick one of several choices.",
    code:`<label><input type="radio" name="plan" value="free"> Free</label>
<label><input type="radio" name="plan" value="pro"> Pro</label>` },
  { cat:"HTML", lang:"html", title:"Checkboxes", desc:"Select multiple options.",
    code:`<label><input type="checkbox" name="skills" value="php"> PHP</label>
<label><input type="checkbox" name="skills" value="js"> JS</label>` },
  { cat:"HTML", lang:"html", title:"Textarea", desc:"Multi-line text input.",
    code:`<textarea name="message" rows="4" placeholder="Your message"></textarea>` },
  { cat:"HTML", lang:"html", title:"Button types", desc:"Submit, reset and plain buttons.",
    code:`<button type="submit">Save</button>
<button type="reset">Clear</button>
<button type="button" onclick="doThing()">Action</button>` },
  { cat:"HTML", lang:"html", title:"Input validation attributes", desc:"Built-in browser validation.",
    code:`<input type="email" required>
<input type="text" pattern="[A-Za-z]+" minlength="2">
<input type="number" min="1" max="10">` },
  { cat:"HTML", lang:"html", title:"Datalist autocomplete", desc:"Suggest values as the user types.",
    code:`<input list="cities">
<datalist id="cities">
  <option value="Mumbai"><option value="Delhi">
</datalist>` },
  { cat:"HTML", lang:"html", title:"Details / summary accordion", desc:"Native collapsible section, no JS.",
    code:`<details>
  <summary>Read more</summary>
  <p>Hidden content revealed on click.</p>
</details>` },
  { cat:"HTML", lang:"html", title:"Progress & meter", desc:"Show progress or a measured value.",
    code:`<progress value="70" max="100"></progress>
<meter value="0.6">60%</meter>` },
  { cat:"HTML", lang:"html", title:"Inline SVG", desc:"Crisp, scalable vector graphics.",
    code:`<svg width="40" height="40" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" fill="#7c5cff" />
</svg>` },
  { cat:"HTML", lang:"html", title:"Canvas element", desc:"Draw graphics with JavaScript.",
    code:`<canvas id="c" width="200" height="100"></canvas>
<script>
  c.getContext('2d').fillRect(10, 10, 80, 50);
</script>` },
  { cat:"HTML", lang:"html", title:"Responsive images (srcset)", desc:"Serve the right size per device.",
    code:`<img src="small.jpg"
     srcset="small.jpg 480w, large.jpg 1080w"
     sizes="(max-width: 600px) 480px, 1080px" alt="">` },
  { cat:"HTML", lang:"html", title:"Picture element", desc:"Art-direct or swap formats.",
    code:`<picture>
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero">
</picture>` },
  { cat:"HTML", lang:"html", title:"Download link", desc:"Force a file to download.",
    code:`<a href="resume.pdf" download>Download CV</a>` },
  { cat:"HTML", lang:"html", title:"Video with poster", desc:"Show a thumbnail before play.",
    code:`<video src="demo.mp4" poster="thumb.jpg" controls width="480"></video>` },
  { cat:"HTML", lang:"html", title:"Open Graph tags", desc:"Why: control link previews on social media.",
    code:`<meta property="og:title" content="Dipak Barman">
<meta property="og:image" content="preview.jpg">
<meta property="og:description" content="Full-Stack Developer">` },
  { cat:"HTML", lang:"html", title:"Favicon", desc:"Set the browser-tab icon.",
    code:`<link rel="icon" href="/favicon.ico">` },
  { cat:"HTML", lang:"html", title:"ARIA for accessibility", desc:"Why: help screen readers understand UI.",
    code:`<button aria-label="Close menu">✕</button>
<nav role="navigation" aria-label="Main"></nav>` },
  { cat:"HTML", lang:"html", title:"Semantic page structure", desc:"Meaningful layout regions.",
    code:`<header></header>
<nav></nav>
<main><article></article></main>
<footer></footer>` },
  { cat:"HTML", lang:"html", title:"Embed a map (iframe)", desc:"Embed external content.",
    code:`<iframe src="https://maps.google.com/..."
        width="100%" height="300" loading="lazy"></iframe>` },

  /* ===== CSS (+26) ===== */
  { cat:"CSS", lang:"css", title:"Basic selectors", desc:"Target by tag, class and id.",
    code:`p        { color: #333; }     /* tag */
.btn     { padding: 8px; }    /* class */
#main    { width: 100%; }     /* id */` },
  { cat:"CSS", lang:"css", title:"Descendant & child selectors", desc:"Target nested elements.",
    code:`.card p      { margin: 0; }   /* any p inside .card */
.menu > li   { display: inline; } /* direct children only */` },
  { cat:"CSS", lang:"css", title:"Interactive pseudo-classes", desc:"Style hover, focus and active.",
    code:`a:hover  { color: #7c5cff; }
input:focus { outline: 2px solid #00d4ff; }` },
  { cat:"CSS", lang:"css", title:"Color formats", desc:"Hex, rgb and hsl.",
    code:`color: #7c5cff;
background: rgb(124, 92, 255);
border-color: hsl(252, 100%, 68%);` },
  { cat:"CSS", lang:"css", title:"Background image cover", desc:"Fill an area with an image.",
    code:`.hero {
  background: url('bg.jpg') center/cover no-repeat;
}` },
  { cat:"CSS", lang:"css", title:"Borders & radius", desc:"Outline and round corners.",
    code:`.card {
  border: 1px solid #ddd;
  border-radius: 12px;
}` },
  { cat:"CSS", lang:"css", title:"Margin & padding shorthand", desc:"Set spacing on all sides.",
    code:`.box {
  margin: 10px 20px;        /* y x */
  padding: 8px 12px 16px;   /* top x bottom */
}` },
  { cat:"CSS", lang:"css", title:"Flexbox essentials", desc:"Direction, justify and align.",
    code:`.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}` },
  { cat:"CSS", lang:"css", title:"Flex wrap & gap", desc:"Wrap items and space them.",
    code:`.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}` },
  { cat:"CSS", lang:"css", title:"Grid template areas", desc:"Name regions for clear layouts.",
    code:`.app {
  display: grid;
  grid-template-areas: 'nav main';
  grid-template-columns: 200px 1fr;
}
.sidebar { grid-area: nav; }` },
  { cat:"CSS", lang:"css", title:"Auto-fit responsive grid", desc:"Columns that adapt automatically.",
    code:`.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}` },
  { cat:"CSS", lang:"css", title:"Typography control", desc:"Font, weight and spacing.",
    code:`h1 {
  font: 700 2rem/1.2 'Outfit', sans-serif;
  letter-spacing: -0.5px;
}` },
  { cat:"CSS", lang:"css", title:"Text alignment & decoration", desc:"Align and underline text.",
    code:`.center { text-align: center; }
.link   { text-decoration: underline; }` },
  { cat:"CSS", lang:"css", title:"Handle overflow", desc:"Scroll or clip overflowing content.",
    code:`.scroll { overflow-y: auto; max-height: 300px; }
.clip   { overflow: hidden; }` },
  { cat:"CSS", lang:"css", title:"Opacity & visibility", desc:"Fade or hide elements.",
    code:`.faded  { opacity: 0.5; }
.hidden { visibility: hidden; } /* keeps its space */` },
  { cat:"CSS", lang:"css", title:"Stacking with z-index", desc:"Control overlap order.",
    code:`.modal   { position: fixed; z-index: 1000; }
.overlay { position: fixed; z-index: 999; }` },
  { cat:"CSS", lang:"css", title:"Transform elements", desc:"Scale, rotate and move.",
    code:`.zoom:hover  { transform: scale(1.05); }
.rotate      { transform: rotate(45deg); }` },
  { cat:"CSS", lang:"css", title:"Object-fit for images", desc:"Why: fit images without distortion.",
    code:`.avatar {
  width: 80px; height: 80px;
  object-fit: cover;
  border-radius: 50%;
}` },
  { cat:"CSS", lang:"css", title:"Aspect ratio", desc:"Keep consistent proportions.",
    code:`.video { aspect-ratio: 16 / 9; width: 100%; }` },
  { cat:"CSS", lang:"css", title:"Fluid font with clamp()", desc:"Responsive text without media queries.",
    code:`h1 { font-size: clamp(1.5rem, 4vw, 3rem); }` },
  { cat:"CSS", lang:"css", title:"Hover lift effect", desc:"A polished card interaction.",
    code:`.card {
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.2);
}` },
  { cat:"CSS", lang:"css", title:"Loading spinner", desc:"Pure-CSS animated loader.",
    code:`.spinner {
  width: 32px; height: 32px;
  border: 4px solid #ddd;
  border-top-color: #7c5cff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }` },
  { cat:"CSS", lang:"css", title:"Responsive navbar", desc:"Flex nav that wraps on mobile.",
    code:`.nav {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
}` },
  { cat:"CSS", lang:"css", title:"Style a custom button", desc:"A reusable gradient button.",
    code:`.btn {
  background: linear-gradient(135deg, #7c5cff, #00d4ff);
  color: #fff; border: none;
  padding: 0.8rem 1.6rem; border-radius: 50px; cursor: pointer;
}` },
  { cat:"CSS", lang:"css", title:"Center anything", desc:"The reliable fl/grid centering trick.",
    code:`.center {
  display: grid;
  place-items: center;
  min-height: 100vh;
}` },
  { cat:"CSS", lang:"css", title:"Style the scrollbar", desc:"Custom scrollbar styling.",
    code:`::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-thumb {
  background: #7c5cff; border-radius: 10px;
}` },

  /* ===== Tailwind (+28) ===== */
  { cat:"Tailwind", lang:"bash", title:"Install via npm", desc:"Set up Tailwind in a real project.",
    code:`npm install -D tailwindcss
npx tailwindcss init
# add the @tailwind directives to your CSS, then run the build` },
  { cat:"Tailwind", lang:"html", title:"Padding & margin", desc:"Spacing utilities.",
    code:`<div class="p-4 m-2 px-6 mt-8">Spaced</div>` },
  { cat:"Tailwind", lang:"html", title:"Width & height", desc:"Sizing utilities.",
    code:`<div class="w-full h-64 max-w-md">Box</div>` },
  { cat:"Tailwind", lang:"html", title:"Text & background colors", desc:"Apply the color palette.",
    code:`<p class="text-indigo-600 bg-gray-100">Colored</p>` },
  { cat:"Tailwind", lang:"html", title:"Flexbox utilities", desc:"Build flex layouts fast.",
    code:`<div class="flex items-center justify-between gap-4">
  <span>Left</span><span>Right</span>
</div>` },
  { cat:"Tailwind", lang:"html", title:"Grid utilities", desc:"Responsive grids in classes.",
    code:`<div class="grid grid-cols-2 md:grid-cols-4 gap-4">...</div>` },
  { cat:"Tailwind", lang:"html", title:"Borders & rounded", desc:"Outline and corner radius.",
    code:`<div class="border border-gray-300 rounded-xl">Card</div>` },
  { cat:"Tailwind", lang:"html", title:"Shadows", desc:"Add depth.",
    code:`<div class="shadow-lg hover:shadow-xl transition">Elevated</div>` },
  { cat:"Tailwind", lang:"html", title:"Typography utilities", desc:"Size, weight and tracking.",
    code:`<h1 class="text-3xl font-extrabold tracking-tight">Heading</h1>` },
  { cat:"Tailwind", lang:"html", title:"Text alignment", desc:"Align text easily.",
    code:`<p class="text-center md:text-left">Responsive align</p>` },
  { cat:"Tailwind", lang:"html", title:"Hover & focus variants", desc:"State-based styling.",
    code:`<button class="bg-indigo-600 hover:bg-indigo-700 focus:ring-2">
  Click
</button>` },
  { cat:"Tailwind", lang:"html", title:"Responsive breakpoints", desc:"Why: mobile-first responsive design.",
    code:`<div class="text-sm sm:text-base lg:text-xl">Scales up</div>` },
  { cat:"Tailwind", lang:"js", title:"Enable dark mode", desc:"Class-based dark theme.",
    code:`// tailwind.config.js
module.exports = { darkMode: 'class' };
// <html class="dark"> then use dark: variants` },
  { cat:"Tailwind", lang:"html", title:"Positioning", desc:"Absolute and relative utilities.",
    code:`<div class="relative">
  <span class="absolute top-0 right-0">●</span>
</div>` },
  { cat:"Tailwind", lang:"html", title:"Display utilities", desc:"Show/hide per breakpoint.",
    code:`<div class="hidden md:block">Desktop only</div>
<div class="block md:hidden">Mobile only</div>` },
  { cat:"Tailwind", lang:"html", title:"Container & max-width", desc:"Constrain content width.",
    code:`<div class="container mx-auto max-w-5xl px-4">...</div>` },
  { cat:"Tailwind", lang:"html", title:"Hover scale transition", desc:"Subtle interactive motion.",
    code:`<img class="transition hover:scale-105 duration-200" src="...">` },
  { cat:"Tailwind", lang:"html", title:"Group hover", desc:"Style children when a parent is hovered.",
    code:`<div class="group">
  <p class="text-gray-500 group-hover:text-black">Reveal</p>
</div>` },
  { cat:"Tailwind", lang:"html", title:"Gradient background", desc:"Multi-color backgrounds.",
    code:`<div class="bg-gradient-to-r from-indigo-500 to-cyan-400">Gradient</div>` },
  { cat:"Tailwind", lang:"html", title:"Opacity", desc:"Control transparency.",
    code:`<div class="bg-black/50 text-white/80">Overlay</div>` },
  { cat:"Tailwind", lang:"html", title:"Aspect ratio", desc:"Fixed proportion boxes.",
    code:`<div class="aspect-video bg-gray-200">16:9</div>` },
  { cat:"Tailwind", lang:"html", title:"Truncate text", desc:"Cut overflowing text with ellipsis.",
    code:`<p class="truncate w-48">A very long line of text...</p>` },
  { cat:"Tailwind", lang:"html", title:"Style a form input", desc:"Clean, accessible input.",
    code:`<input class="w-full border rounded-lg px-3 py-2
  focus:ring-2 focus:ring-indigo-500 focus:outline-none">` },
  { cat:"Tailwind", lang:"html", title:"Responsive card grid", desc:"A common layout pattern.",
    code:`<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white rounded-2xl shadow p-6">Card</div>
</div>` },
  { cat:"Tailwind", lang:"html", title:"Navbar with flex", desc:"Header layout in utilities.",
    code:`<nav class="flex items-center justify-between p-4 bg-white shadow">
  <span class="font-bold">Logo</span>
  <div class="flex gap-6">...</div>
</nav>` },
  { cat:"Tailwind", lang:"html", title:"Badge / pill", desc:"Small status labels.",
    code:`<span class="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700">
  Active
</span>` },
  { cat:"Tailwind", lang:"html", title:"Divide between items", desc:"Add lines between children.",
    code:`<ul class="divide-y divide-gray-200">
  <li class="py-2">One</li><li class="py-2">Two</li>
</ul>` },
  { cat:"Tailwind", lang:"js", title:"Add a custom color", desc:"Extend the theme.",
    code:`// tailwind.config.js
theme: { extend: { colors: { brand: '#7c5cff' } } }
// use: bg-brand text-brand` },

  /* ===== Bootstrap (+28) ===== */
  { cat:"Bootstrap", lang:"html", title:"Container types", desc:"Fixed vs full-width wrappers.",
    code:`<div class="container">Centered, responsive</div>
<div class="container-fluid">Full width</div>` },
  { cat:"Bootstrap", lang:"html", title:"Rows & columns", desc:"The 12-column grid.",
    code:`<div class="row">
  <div class="col-4">A</div>
  <div class="col-8">B</div>
</div>` },
  { cat:"Bootstrap", lang:"html", title:"Column offset", desc:"Push columns to the right.",
    code:`<div class="row">
  <div class="col-6 offset-3">Centered column</div>
</div>` },
  { cat:"Bootstrap", lang:"html", title:"Responsive columns", desc:"Different widths per breakpoint.",
    code:`<div class="col-12 col-md-6 col-lg-4">Adapts to screen</div>` },
  { cat:"Bootstrap", lang:"html", title:"Spacing utilities", desc:"Margin and padding helpers.",
    code:`<div class="mt-3 mb-4 px-2 p-md-5">Spaced</div>` },
  { cat:"Bootstrap", lang:"html", title:"Text utilities", desc:"Alignment and styling classes.",
    code:`<p class="text-center text-muted fw-bold text-uppercase">Title</p>` },
  { cat:"Bootstrap", lang:"html", title:"Color utilities", desc:"Contextual text and backgrounds.",
    code:`<div class="bg-primary text-white p-2">Primary</div>
<span class="text-danger">Error</span>` },
  { cat:"Bootstrap", lang:"html", title:"Button sizes & outlines", desc:"Variants and sizes.",
    code:`<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-outline-secondary btn-sm">Small</button>` },
  { cat:"Bootstrap", lang:"html", title:"Button group", desc:"Group related buttons.",
    code:`<div class="btn-group">
  <button class="btn btn-secondary">Left</button>
  <button class="btn btn-secondary">Right</button>
</div>` },
  { cat:"Bootstrap", lang:"html", title:"Dropdown menu", desc:"Toggleable menu.",
    code:`<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Menu</button>
  <ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Item</a></li></ul>
</div>` },
  { cat:"Bootstrap", lang:"html", title:"Nav tabs", desc:"Tabbed navigation.",
    code:`<ul class="nav nav-tabs">
  <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Profile</a></li>
</ul>` },
  { cat:"Bootstrap", lang:"html", title:"Pills navigation", desc:"Rounded nav style.",
    code:`<ul class="nav nav-pills">
  <li class="nav-item"><a class="nav-link active" href="#">One</a></li>
</ul>` },
  { cat:"Bootstrap", lang:"html", title:"Breadcrumb", desc:"Show navigation hierarchy.",
    code:`<nav><ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item active">Library</li>
</ol></nav>` },
  { cat:"Bootstrap", lang:"html", title:"Pagination", desc:"Page navigation controls.",
    code:`<ul class="pagination">
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item active"><a class="page-link" href="#">2</a></li>
</ul>` },
  { cat:"Bootstrap", lang:"html", title:"List group", desc:"A styled list of items.",
    code:`<ul class="list-group">
  <li class="list-group-item">Item one</li>
  <li class="list-group-item active">Selected</li>
</ul>` },
  { cat:"Bootstrap", lang:"html", title:"Accordion", desc:"Collapsible content panels.",
    code:`<div class="accordion" id="acc">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#c1">Section</button>
    </h2>
    <div id="c1" class="accordion-collapse collapse"><div class="accordion-body">Body</div></div>
  </div>
</div>` },
  { cat:"Bootstrap", lang:"html", title:"Toast notification", desc:"Lightweight popup message.",
    code:`<div class="toast show">
  <div class="toast-body">Saved successfully!</div>
</div>` },
  { cat:"Bootstrap", lang:"html", title:"Progress bar", desc:"Visualise completion.",
    code:`<div class="progress">
  <div class="progress-bar" style="width: 70%">70%</div>
</div>` },
  { cat:"Bootstrap", lang:"html", title:"Input group", desc:"Add-ons around inputs.",
    code:`<div class="input-group">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="username">
</div>` },
  { cat:"Bootstrap", lang:"html", title:"Floating labels", desc:"Labels that animate into place.",
    code:`<div class="form-floating">
  <input class="form-control" id="e" placeholder="Email">
  <label for="e">Email</label>
</div>` },
  { cat:"Bootstrap", lang:"html", title:"Form validation styles", desc:"Show valid/invalid feedback.",
    code:`<input class="form-control is-invalid">
<div class="invalid-feedback">Please enter a value.</div>` },
  { cat:"Bootstrap", lang:"html", title:"Spinner sizes", desc:"Loading indicators.",
    code:`<div class="spinner-border text-primary"></div>
<div class="spinner-grow spinner-grow-sm"></div>` },
  { cat:"Bootstrap", lang:"html", title:"Offcanvas drawer", desc:"Slide-in side panel.",
    code:`<button class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#side">Open</button>
<div class="offcanvas offcanvas-start" id="side">
  <div class="offcanvas-body">Menu</div>
</div>` },
  { cat:"Bootstrap", lang:"html", title:"Modal sizes", desc:"Small, large or fullscreen modals.",
    code:`<div class="modal-dialog modal-lg">...</div>
<div class="modal-dialog modal-fullscreen">...</div>` },
  { cat:"Bootstrap", lang:"html", title:"Flex helpers", desc:"Bootstrap's flex utility classes.",
    code:`<div class="d-flex justify-content-between align-items-center gap-3">
  <span>Left</span><span>Right</span>
</div>` },
  { cat:"Bootstrap", lang:"html", title:"Display utilities", desc:"Responsive show/hide.",
    code:`<div class="d-none d-md-block">Visible on md+</div>` },
  { cat:"Bootstrap", lang:"html", title:"Ratio (responsive embed)", desc:"Keep media proportions.",
    code:`<div class="ratio ratio-16x9">
  <iframe src="https://youtube.com/embed/..."></iframe>
</div>` },
  { cat:"Bootstrap", lang:"html", title:"Tooltip", desc:"Hover hint (needs JS init).",
    code:`<button class="btn" data-bs-toggle="tooltip" title="Hi there">Hover</button>
<script>new bootstrap.Tooltip(document.querySelector('[data-bs-toggle=tooltip]'));</script>` },

  /* ===== Git (+30) ===== */
  { cat:"Git", lang:"bash", title:"Set your identity", desc:"Name & email attached to commits.",
    code:`git config --global user.name "Dipak Barman"
git config --global user.email "you@example.com"` },
  { cat:"Git", lang:"bash", title:"Stage files", desc:"Choose what goes into the next commit.",
    code:`git add file.txt      # one file
git add .             # everything in this folder
git add -A            # everything, including deletions` },
  { cat:"Git", lang:"bash", title:"Commit tracked files quickly", desc:"Stage & commit in one step.",
    code:`git commit -am "Update styles"` },
  { cat:"Git", lang:"bash", title:"Amend the last commit", desc:"Fix the message or add changes.",
    code:`git commit --amend -m "Better message"` },
  { cat:"Git", lang:"bash", title:"See unstaged changes", desc:"Review edits before staging.",
    code:`git diff` },
  { cat:"Git", lang:"bash", title:"See staged changes", desc:"Review what will be committed.",
    code:`git diff --staged` },
  { cat:"Git", lang:"bash", title:"Compact history graph", desc:"Visualise branches and merges.",
    code:`git log --oneline --graph --all --decorate` },
  { cat:"Git", lang:"bash", title:"Inspect a commit", desc:"See a commit's diff and details.",
    code:`git show a1b2c3d` },
  { cat:"Git", lang:"bash", title:"Delete a branch", desc:"Remove merged or stale branches.",
    code:`git branch -d feature   # safe (merged only)
git branch -D feature   # force` },
  { cat:"Git", lang:"bash", title:"Rename current branch", desc:"Fix a branch name.",
    code:`git branch -m new-name` },
  { cat:"Git", lang:"bash", title:"Switch branches", desc:"Move between branches.",
    code:`git switch main
git switch -c feature   # create & switch` },
  { cat:"Git", lang:"bash", title:"Merge without fast-forward", desc:"Always record a merge commit.",
    code:`git merge --no-ff feature` },
  { cat:"Git", lang:"bash", title:"Interactive rebase", desc:"Squash and tidy recent commits.",
    code:`git rebase -i HEAD~3` },
  { cat:"Git", lang:"bash", title:"Cherry-pick a commit", desc:"Apply one commit from elsewhere.",
    code:`git cherry-pick a1b2c3d` },
  { cat:"Git", lang:"bash", title:"Reset levels explained", desc:"Why: undo commits with different effects.",
    code:`git reset --soft HEAD~1   # keep changes staged
git reset --mixed HEAD~1  # keep changes unstaged
git reset --hard HEAD~1   # discard changes` },
  { cat:"Git", lang:"bash", title:"Revert a commit safely", desc:"Undo on shared history.",
    code:`git revert a1b2c3d` },
  { cat:"Git", lang:"bash", title:"Discard file changes", desc:"Throw away local edits.",
    code:`git restore index.html` },
  { cat:"Git", lang:"bash", title:"Create an annotated tag", desc:"Mark a release with a message.",
    code:`git tag -a v1.0.0 -m "Release 1.0"` },
  { cat:"Git", lang:"bash", title:"Push tags", desc:"Send tags to the remote.",
    code:`git push origin v1.0.0
git push --tags` },
  { cat:"Git", lang:"bash", title:"Fetch without merging", desc:"Download updates only.",
    code:`git fetch origin` },
  { cat:"Git", lang:"bash", title:"Manage remotes", desc:"View and change remote URLs.",
    code:`git remote -v
git remote set-url origin https://github.com/you/repo.git` },
  { cat:"Git", lang:"bash", title:"Stash list, pop & apply", desc:"Manage multiple stashes.",
    code:`git stash list
git stash apply stash@{1}
git stash pop` },
  { cat:"Git", lang:"bash", title:"Clean untracked files", desc:"Remove files Git isn't tracking.",
    code:`git clean -nd   # preview
git clean -fd   # actually delete` },
  { cat:"Git", lang:"bash", title:"Recover with reflog", desc:"Why: rescue commits after a bad reset.",
    code:`git reflog
git checkout a1b2c3d   # the lost commit` },
  { cat:"Git", lang:"bash", title:"Blame a file", desc:"See who changed each line.",
    code:`git blame README.md` },
  { cat:"Git", lang:"bash", title:"Find a bug with bisect", desc:"Binary-search history for a regression.",
    code:`git bisect start
git bisect bad
git bisect good v1.0.0` },
  { cat:"Git", lang:"bash", title:"Work on two branches at once", desc:"Check out a branch in a second folder.",
    code:`git worktree add ../hotfix main` },
  { cat:"Git", lang:"bash", title:"Add a submodule", desc:"Embed another repo at a fixed commit.",
    code:`git submodule add https://github.com/user/lib.git libs/lib` },
  { cat:"Git", lang:"bash", title:"Create command aliases", desc:"Shortcuts for common commands.",
    code:`git config --global alias.st status
git config --global alias.lg "log --oneline --graph"` },
  { cat:"Git", lang:"bash", title:"Compare two branches", desc:"See what differs between branches.",
    code:`git diff main..feature` },

  /* ===== Docker (+24) ===== */
  { cat:"Docker", lang:"bash", title:"Pull an image", desc:"Download an image from a registry.",
    code:`docker pull node:20-alpine` },
  { cat:"Docker", lang:"bash", title:"Run an interactive shell", desc:"Explore inside a fresh container.",
    code:`docker run -it ubuntu bash` },
  { cat:"Docker", lang:"bash", title:"Inspect a container", desc:"View detailed config and state.",
    code:`docker inspect web
docker inspect -f '{{.State.Status}}' web` },
  { cat:"Docker", lang:"bash", title:"Copy files to/from a container", desc:"Move files in or out.",
    code:`docker cp ./config.json web:/app/config.json
docker cp web:/app/logs ./logs` },
  { cat:"Docker", lang:"bash", title:"Set a restart policy", desc:"Why: auto-restart containers after crashes/reboots.",
    code:`docker run -d --restart unless-stopped myapp` },
  { cat:"Docker", lang:"bash", title:"Limit memory & CPU", desc:"Cap container resource usage.",
    code:`docker run -d --memory 512m --cpus 1 myapp` },
  { cat:"Docker", lang:"bash", title:"View resource usage", desc:"Live stats per container.",
    code:`docker stats` },
  { cat:"Docker", lang:"bash", title:"Save & load an image", desc:"Share an image as a file.",
    code:`docker save -o myapp.tar myapp:1.0
docker load -i myapp.tar` },
  { cat:"Docker", lang:"dockerfile", title:"Add a HEALTHCHECK", desc:"Why: let Docker know if your app is healthy.",
    code:`HEALTHCHECK --interval=30s --timeout=3s \\
  CMD wget -qO- http://localhost:3000/health || exit 1` },
  { cat:"Docker", lang:"dockerfile", title:"Build arguments (ARG)", desc:"Pass values at build time.",
    code:`ARG NODE_VERSION=20
FROM node:\${NODE_VERSION}-alpine
# docker build --build-arg NODE_VERSION=18 .` },
  { cat:"Docker", lang:"dockerfile", title:"Set ENV variables", desc:"Bake config into the image.",
    code:`ENV NODE_ENV=production
ENV PORT=3000` },
  { cat:"Docker", lang:"bash", title:"Expose vs publish ports", desc:"Why: EXPOSE documents, -p actually maps.",
    code:`# EXPOSE in Dockerfile = documentation only
# -p maps host->container at run time:
docker run -p 8080:3000 myapp` },
  { cat:"Docker", lang:"bash", title:"Bind mount for live dev", desc:"Edit code on the host, see it in the container.",
    code:`docker run -v $(pwd):/app -p 3000:3000 myapp
# your local folder is mounted into /app` },
  { cat:"Docker", lang:"yaml", title:"Compose with an env file", desc:"Load variables for services.",
    code:`services:
  app:
    build: .
    env_file: .env` },
  { cat:"Docker", lang:"bash", title:"Scale a Compose service", desc:"Run multiple instances.",
    code:`docker compose up -d --scale worker=3` },
  { cat:"Docker", lang:"yaml", title:"Use a prebuilt image in Compose", desc:"No Dockerfile needed for some services.",
    code:`services:
  redis:
    image: redis:7
    ports:
      - "6379:6379"` },
  { cat:"Docker", lang:"dockerfile", title:"Dockerfile for Python", desc:"Containerize a Python app.",
    code:`FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]` },
  { cat:"Docker", lang:"dockerfile", title:"Serve a static site with Nginx", desc:"Ship plain HTML/CSS/JS.",
    code:`FROM nginx:alpine
COPY ./site /usr/share/nginx/html
EXPOSE 80` },
  { cat:"Docker", lang:"bash", title:"Prune unused data", desc:"Reclaim disk space.",
    code:`docker system prune -a    # remove unused images/containers
docker volume prune       # remove unused volumes` },
  { cat:"Docker", lang:"bash", title:"Tag an image for a registry", desc:"Prepare to push.",
    code:`docker tag myapp:1.0 registry.example.com/team/myapp:1.0` },
  { cat:"Docker", lang:"bash", title:"Rebuild after code changes", desc:"Pick up new code in the image.",
    code:`docker compose up -d --build` },
  { cat:"Docker", lang:"bash", title:"Follow logs for a service", desc:"Debug a specific Compose service.",
    code:`docker compose logs -f app` },
  { cat:"Docker", lang:"yaml", title:"Restart policy in Compose", desc:"Keep services up automatically.",
    code:`services:
  app:
    build: .
    restart: unless-stopped` },
  { cat:"Docker", lang:"bash", title:"Remove everything for a project", desc:"Clean stop of a Compose stack.",
    code:`docker compose down -v --rmi local` },

  /* ===== AWS (+20) ===== */
  { cat:"AWS", lang:"json", title:"Make an S3 bucket public (policy)", desc:"Why: required to serve a public static site.",
    code:`{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::my-site/*"
  }]
}` },
  { cat:"AWS", lang:"bash", title:"Generate an S3 presigned URL", desc:"Why: share a private file temporarily and securely.",
    code:`aws s3 presign s3://my-bucket/report.pdf --expires-in 3600` },
  { cat:"AWS", lang:"bash", title:"EC2 user-data startup script", desc:"Run setup automatically when an instance boots.",
    code:`#!/bin/bash
apt-get update -y
apt-get install -y nginx
systemctl enable nginx
# paste this in 'Advanced details > User data' at launch` },
  { cat:"AWS", lang:"text", title:"Attach an Elastic IP", desc:"Why: keep a fixed public IP across restarts.",
    code:`1. EC2 > Elastic IPs > Allocate
2. Associate it with your instance
Now the IP stays the same even after reboots.` },
  { cat:"AWS", lang:"text", title:"Create an AMI (snapshot)", desc:"Why: clone a configured server or back it up.",
    code:`EC2 > Instances > select > Actions > Image > Create image
Launch new servers from that AMI later.` },
  { cat:"AWS", lang:"bash", title:"Install a LAMP stack on EC2", desc:"Host PHP apps with Apache + MySQL.",
    code:`sudo apt update
sudo apt install -y apache2 php libapache2-mod-php php-mysql
sudo systemctl restart apache2` },
  { cat:"AWS", lang:"bash", title:"Connect EC2 app to RDS", desc:"Point your app to the managed database.",
    code:`# In your app's .env on EC2:
DB_HOST=mydb.xxxx.ap-south-1.rds.amazonaws.com
DB_USER=admin
DB_PASS=secret` },
  { cat:"AWS", lang:"text", title:"View logs in CloudWatch", desc:"Why: centralise logs and set alarms.",
    code:`1. Install the CloudWatch agent on EC2
2. Stream app/system logs to a log group
3. Create alarms (e.g. CPU > 80%) that notify you` },
  { cat:"AWS", lang:"bash", title:"Send notifications with SNS", desc:"Why: email/SMS alerts from your app or alarms.",
    code:`aws sns publish \\
  --topic-arn arn:aws:sns:region:acct:alerts \\
  --message "Deploy finished"` },
  { cat:"AWS", lang:"text", title:"Queue work with SQS", desc:"Why: decouple and buffer background jobs.",
    code:`Producer -> SQS queue -> Worker(s)
- Reliable, retried message delivery
- Smooths traffic spikes; scale workers independently` },
  { cat:"AWS", lang:"bash", title:"DynamoDB basics", desc:"Serverless NoSQL key-value/document store.",
    code:`aws dynamodb put-item --table-name Tasks \\
  --item '{"id":{"S":"1"},"title":{"S":"Demo"}}'
aws dynamodb get-item --table-name Tasks \\
  --key '{"id":{"S":"1"}}'` },
  { cat:"AWS", lang:"text", title:"API Gateway + Lambda", desc:"Why: a serverless HTTP API with no servers to run.",
    code:`1. Create a Lambda function
2. Create an HTTP API in API Gateway
3. Route GET /tasks -> the Lambda
Result: a public endpoint backed by your function.` },
  { cat:"AWS", lang:"text", title:"Lambda environment variables", desc:"Keep config/secrets out of code.",
    code:`Lambda > Configuration > Environment variables
Add DB_URL, API_KEY, etc. -> read via process.env in code.` },
  { cat:"AWS", lang:"json", title:"IAM policy example", desc:"Why: grant least-privilege access (only what's needed).",
    code:`{
  "Effect": "Allow",
  "Action": ["s3:GetObject", "s3:PutObject"],
  "Resource": "arn:aws:s3:::my-bucket/*"
}` },
  { cat:"AWS", lang:"text", title:"S3 lifecycle rule", desc:"Why: auto-archive or delete old files to cut costs.",
    code:`Bucket > Management > Lifecycle rule
- Move objects to Glacier after 30 days
- Delete after 365 days` },
  { cat:"AWS", lang:"text", title:"Load balancer (ELB)", desc:"Why: spread traffic across servers + health checks.",
    code:`Application Load Balancer:
- Sits in front of multiple EC2 instances
- Routes traffic, removes unhealthy targets
- Terminates HTTPS in one place` },
  { cat:"AWS", lang:"text", title:"Auto Scaling group", desc:"Why: add/remove servers automatically with demand.",
    code:`Define min/desired/max instances.
Scale out when CPU > 70%, scale in when low.
Pairs with a Load Balancer for resilient apps.` },
  { cat:"AWS", lang:"yaml", title:"Deploy to EC2 with GitHub Actions", desc:"Why: automate deploys on every push.",
    code:`jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: appleboy/ssh-action@v1
        with:
          host: \${{ secrets.EC2_HOST }}
          key:  \${{ secrets.EC2_KEY }}
          script: cd app && git pull && pm2 restart web` },
  { cat:"AWS", lang:"bash", title:"Set a billing budget alert", desc:"Why: get warned before you ever get charged.",
    code:`# AWS Budgets > Create budget > Cost budget
# Set amount (e.g. $1) and an email alert at 80%.
aws budgets describe-budgets --account-id <acct>` },
  { cat:"AWS", lang:"text", title:"Choose the right service", desc:"Why: pick the simplest tool for the job.",
    code:`Static site      -> S3 + CloudFront
Simple server    -> EC2
No-ops web app   -> Elastic Beanstalk
Containers       -> ECS / Fargate
Event/API code   -> Lambda + API Gateway
Managed database -> RDS or DynamoDB` },
);
